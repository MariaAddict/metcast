import "./Main.css";
import SearchForecast from "../SearchForecast/SearchForecast";
import { Cards } from "../../types";

type MainProps = {
  cardsSevenDays: Cards;
  cardDayInPast: Cards;
  getWeatherForecastOnSevenDays(city: string): void;
  handleButtonRight(): void;
  handleButtonLeft(): void;
  numberOfInitalCard: number;
  isLeftButtonEnabled: boolean;
  isRightButtonEnabled: boolean;
  getHistoricalWeatherData(city: string, date: number): void;
};

function Main(props: MainProps) {
  return (
    <main className="main">
      <SearchForecast
        forecast="7days"
        cards={props.cardsSevenDays}
        getWeatherForecastOnSevenDays={props.getWeatherForecastOnSevenDays}
        handleButtonRight={props.handleButtonRight}
        handleButtonLeft={props.handleButtonLeft}
        numberOfInitalCard={props.numberOfInitalCard}
        isLeftButtonEnabled={props.isLeftButtonEnabled}
        isRightButtonEnabled={props.isRightButtonEnabled}
      />
      <SearchForecast
        forecast="day"
        cards={props.cardDayInPast}
        getHistoricalWeatherData={props.getHistoricalWeatherData}
      />
    </main>
  );
}

export default Main;
