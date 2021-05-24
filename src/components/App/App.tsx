import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import apiWeather from "../../utils/WeatherApi";
import { CardItem, Cards, Coordinates } from "../../types";

function App() {
  const [cardsSevenDays, setCardsSevenDays] = useState<Cards>([]);
  const [cardDayInPast, setCardDayInPast] = useState<Cards>([]);
  const [numberOfInitalCard, setNumberOfInitalCard] = useState<number>(0);
  const [isRightButtonEnabled, setIsRightButtonEnabled] =
    useState<boolean>(true);
  const [isLeftButtonEnabled, setIsLeftButtonEnabled] =
    useState<boolean>(false);
  const [isFormSevenDaysSubmited, setIsFormSevenDaysSubmited] =
    useState<boolean>(false);
  const [isFormHistoryDaySubmited, setIsFormHistoryDaySubmited] =
    useState<boolean>(false);

  const getCoordinates = (city: string): Coordinates => {
    let cordinates: Coordinates;

    switch (city) {
      case "Самара":
        cordinates = {
          lat: 53.195873,
          lon: 50.100193,
        };
        break;
      case "Тольятти":
        cordinates = {
          lat: 53.507836,
          lon: 49.420393,
        };
        break;
      case "Саратов":
        cordinates = {
          lat: 51.533557,
          lon: 46.034257,
        };
        break;
      case "Казань":
        cordinates = {
          lat: 55.796127,
          lon: 49.106405,
        };
        break;
      case "Краснодар":
        cordinates = {
          lat: 45.03547,
          lon: 38.975313,
        };
        break;
      default:
        console.log("Нет такого города");
    }

    return cordinates!;
  };

  const optionsData: any = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  function createCard(
    date: number,
    temperature: number,
    iconUrl: string
  ): CardItem {
    const dateCard: string = new Date(date * 1000)
      .toLocaleDateString("en-GB", optionsData)
      .toLowerCase();
    const newCardItem: CardItem = {
      date: dateCard,
      temperature: Math.round(temperature),
      iconUrl: `http://openweathermap.org/img/wn/${iconUrl}@2x.png`,
    };
    return newCardItem;
  }

  function getWeatherForecastOnSevenDays(city: string): any {
    const cordinatesCity: Coordinates = getCoordinates(city);

    setIsFormSevenDaysSubmited(false);

    apiWeather
      .getWeatherForecastOnSevenDays(cordinatesCity)
      .then((data: any): void => {
        setIsFormSevenDaysSubmited(true);
        const newCards: Cards = data.daily.map((item: any) => {
          return createCard(item.dt, item.temp.day, item.weather[0].icon);
        });

        setCardsSevenDays(newCards);
        setNumberOfInitalCard(0);
        setIsRightButtonEnabled(true);
        setIsLeftButtonEnabled(false);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function getHistoricalWeatherData(city: string, date: number) {
    const coordinatesCity: Coordinates = getCoordinates(city);

    setIsFormHistoryDaySubmited(false);

    apiWeather
      .getWeatherForecastOnDateinThePast(coordinatesCity, date)
      .then((data) => {
        setIsFormHistoryDaySubmited(true);
        const newCard: CardItem = createCard(
          data.current.dt,
          data.current.temp,
          data.current.weather[0].icon
        );
        setCardDayInPast([newCard, ...cardDayInPast]);
        setNumberOfInitalCard(0);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  function handleButtonRight(): void {
    if (numberOfInitalCard < cardsSevenDays.length - 3) {
      setNumberOfInitalCard(numberOfInitalCard + 1);
    }
  }

  function handleButtonLeft(): void {
    if (numberOfInitalCard !== 0) {
      setNumberOfInitalCard(numberOfInitalCard - 1);
    }
  }

  useEffect(() => {
    if (numberOfInitalCard === cardsSevenDays.length - 3) {
      setIsRightButtonEnabled(false);
    }
    if (numberOfInitalCard === cardsSevenDays.length - 4) {
      setIsRightButtonEnabled(true);
    }
    if (numberOfInitalCard === 1) {
      setIsLeftButtonEnabled(true);
    }
    if (numberOfInitalCard === 0) {
      setIsLeftButtonEnabled(false);
    }
  }, [cardsSevenDays.length, numberOfInitalCard]);

  return (
    <div className="app">
      <Header />
      <Main
        cardsSevenDays={cardsSevenDays}
        cardDayInPast={cardDayInPast}
        getWeatherForecastOnSevenDays={getWeatherForecastOnSevenDays}
        handleButtonRight={handleButtonRight}
        handleButtonLeft={handleButtonLeft}
        numberOfInitalCard={numberOfInitalCard}
        isLeftButtonEnabled={isLeftButtonEnabled}
        isRightButtonEnabled={isRightButtonEnabled}
        getHistoricalWeatherData={getHistoricalWeatherData}
        isFormSevenDaysSubmited={isFormSevenDaysSubmited}
        isFormHistoryDaySubmited={isFormHistoryDaySubmited}
      />
      <Footer />
    </div>
  );
}

export default App;
