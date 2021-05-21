import './SearchForecast.css';
import InfoBlock from '../InfoBlock/InfoBlock';
import CardList from '../CardList/CardList';
import image from '../../images/Academy-Weather-bg160.svg'

type CardListProps = Array<{
    date: string,
    temperature: number,
    icon: any,
}>


const cards: CardListProps = [{
    date: '2021-05-27',
    temperature: 23,
    icon: image,
},
{
    date: '2021-05-28',
    temperature: 27,
    icon: image,
},{
    date: '2021-05-29',
    temperature: 5,
    icon: image,
}, {
    date: '2021-05-30',
    temperature: 18,
    icon: image,
}, {
    date: '2021-05-31',
    temperature: 10,
    icon: image,
}];

interface SearchForecastProps {
    forecast: string,
}

function SearchForecast(props: SearchForecastProps) {
    return (
        <div className="forecast">
            <h3 className="forecast__title">{props.forecast === '7days' ? '7 Days Forecast' : 'Forecast for a Date in the Past'}</h3>
            <form className="forecast__form" name={props.forecast}>
                <select className="forecast__input" required >
                    <option hidden disabled selected>Select city</option>
                    <option className="forecast__select-item">Самара</option>
                    <option className="forecast__select-item">Тольятти</option>
                    <option className="forecast__select-item">Саратов</option>
                    <option className="forecast__select-item">Казань</option>
                    <option className="forecast__select-item">Краснодар</option>
                </select>
                {props.forecast === 'day' && <input type="date" className="forecast__input" placeholder='Select date' required ></input>}
            </form>
            {/* <InfoBlock /> */}
            <CardList cards={cards} forecast={props.forecast} />
        </div>
    );
}

export default SearchForecast;