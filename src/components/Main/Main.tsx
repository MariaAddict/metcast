import './Main.css';
import SearchForecast from '../SearchForecast/SearchForecast';
import {Cards} from '../../types';

type MainProps = {
    getWeatherForecastOnSevenDays(city: string): Cards,
}

function Main({getWeatherForecastOnSevenDays}: MainProps) {
    return (
        <main className="main">
            <SearchForecast forecast='7days' getWeatherForecastOnSevenDays={getWeatherForecastOnSevenDays} />
            <SearchForecast forecast='day' />
        </main>
    );
}

export default Main;