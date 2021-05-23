import './Main.css';
import SearchForecast from '../SearchForecast/SearchForecast';
import {Cards} from '../../types';

type MainProps = {
    cardsSevenDays: Cards,
    cardDayInPast: Cards,
    getWeatherForecastOnSevenDays(city: string): Cards,
}

function Main({cardsSevenDays, cardDayInPast, getWeatherForecastOnSevenDays}: MainProps) {
    return (
        <main className="main">
            <SearchForecast forecast='7days' cards={cardsSevenDays} getWeatherForecastOnSevenDays={getWeatherForecastOnSevenDays} />
            <SearchForecast forecast='day' cards={cardDayInPast} />
        </main>
    );
}

export default Main;