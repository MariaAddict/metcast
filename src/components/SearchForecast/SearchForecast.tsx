import './SearchForecast.css';
import InfoBlock from '../InfoBlock/InfoBlock';

interface SearchForecastProps {
    forecast: string,
}

function SearchForecast(props: SearchForecastProps) {
    return (
        <div className="forecast">
            <h3 className="forecast__title">{props.forecast === '7days' ? '7 Days Forecast' : 'Forecast for a Date in the Past'}</h3>
            <form className="forecast__form" name={props.forecast}>
                <select className="forecast__input" >
                    <option hidden disabled selected>Select city</option>
                    <option className="forecast__select-item">Самара</option>
                    <option className="forecast__select-item">Тольятти</option>
                    <option className="forecast__select-item">Саратов</option>
                    <option className="forecast__select-item">Казань</option>
                    <option className="forecast__select-item">Краснодар</option>
                </select>
                {props.forecast === 'day' && <input type="date" className="forecast__input" placeholder='Select date'></input>}
            </form>
            <InfoBlock />
        </div>
    );
}

export default SearchForecast;