import "./SearchForecast.css";
import React, { useState } from "react";
import InfoBlock from "../InfoBlock/InfoBlock";
import CardList from "../CardList/CardList";
import { Cards } from "../../types";

interface SearchForecastProps {
  forecast: string;
  cards: Cards;
  getWeatherForecastOnSevenDays?(city: string): void;
  showNextCard?(): void;
  showPreviousCard?(): void;
  numberOfInitalCard?: number;
  isLeftButtonEnabled?: boolean;
  isRightButtonEnabled?: boolean;
  getHistoricalWeatherData?(city: string, date: number): void;
  isFormSevenDaysSubmited?: boolean;
  isFormHistoryDaySubmited?: boolean;
}

function SearchForecast(props: SearchForecastProps) {
  const [city, setCity] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const form = React.createRef<HTMLFormElement>();

  function setValueSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setCity(event.target.value);
    console.log(event.target.value);
  }

  function setValueDate(event: React.ChangeEvent<HTMLInputElement>): void {
    setDate(event.target.value);
    console.log(event.target.value);
  }

  function handleKeyEnter(event: React.KeyboardEvent): void {
    if (event.key === "Enter") {
      if (props.forecast === "7days" && city !== "") {
        props.getWeatherForecastOnSevenDays!(city);
      } else if (city !== "" && date !== "") {
        const newDate = new Date(date);
        const dateInThePast =
          Date.UTC(
            newDate.getUTCFullYear(),
            newDate.getUTCMonth(),
            newDate.getUTCDate(),
            newDate.getUTCHours(),
            newDate.getUTCMinutes(),
            newDate.getUTCSeconds()
          ) / 1000;
        props.getHistoricalWeatherData!(city, dateInThePast);
      }
    }
  }

  // function onChange(e: any): void{
  //   console.log("event: ", e.target.value);
  // }


  return (
    <div className="forecast">
      <h3 className="forecast__title">
        {props.forecast === "7days"
          ? "7 Days Forecast"
          : "Forecast for a Date in the Past"}
      </h3>
      <form
        ref={form}
        className="forecast__form"
        name={props.forecast}
        onKeyPress={handleKeyEnter}
        // onChange = {onChange}
      >
        <select
          className="forecast__input"
          required
          onChange={setValueSelect}
          value={city}
          name="city"
        >
          <option hidden disabled selected>
            Select city
          </option>
          <option className="forecast__select-item">Самара</option>
          <option className="forecast__select-item">Тольятти</option>
          <option className="forecast__select-item">Саратов</option>
          <option className="forecast__select-item">Казань</option>
          <option className="forecast__select-item">Краснодар</option>
        </select>
        {props.forecast === "day" && (
          <input
            type="date"
            className="forecast__input forecast__input_type_data"
            placeholder="Select date"
            required
            onChange={setValueDate}
            value={date}
            name="date"
          ></input>
        )}
      </form>
      {((props.forecast === "7days" && !props.isFormSevenDaysSubmited) ||
        (props.forecast === "day" && !props.isFormHistoryDaySubmited)) && (
        <InfoBlock />
      )}
      {((props.forecast === "7days" && props.isFormSevenDaysSubmited) ||
        (props.forecast === "day" && props.isFormHistoryDaySubmited)) && (
        <CardList
          cards={props.cards}
          forecast={props.forecast}
          showNextCard={props.showNextCard}
          showPreviousCard={props.showPreviousCard}
          numberOfInitalCard={props.numberOfInitalCard}
          isLeftButtonEnabled={props.isLeftButtonEnabled}
          isRightButtonEnabled={props.isRightButtonEnabled}
        />
      )}
    </div>
  );
}

export default SearchForecast;
