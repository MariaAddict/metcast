import "./Main.css";
import SearchForecast from "../SearchForecast/SearchForecast";
import { Cards } from "../../types";

type MainProps = {
  cardsSevenDays: Cards;
  cardDayInPast: Cards;
  getWeatherForecastOnSevenDays(city: string): Cards;
  handleButtonRight(): void;
  handleButtonLeft(): void;
  numberOfInitalCard: number;
  isLeftButtonEnabled: boolean;
  isRightButtonEnabled: boolean;
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
      <SearchForecast forecast="day" cards={props.cardDayInPast} />
    </main>
  );
}

export default Main;
