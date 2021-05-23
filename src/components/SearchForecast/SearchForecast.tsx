import './SearchForecast.css';
import React, { useState, useEffect } from 'react';
import InfoBlock from '../InfoBlock/InfoBlock';
import CardList from '../CardList/CardList';
import {Cards} from '../../types';


interface SearchForecastProps {
    forecast: string,
    cards: Cards,
    getWeatherForecastOnSevenDays?(city: string): void,
}

function SearchForecast({forecast, cards, getWeatherForecastOnSevenDays}: SearchForecastProps) {

    const [city, setCity] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const form = React.createRef<HTMLFormElement>();

    function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
        setCity(event.target.value);
        console.log(event.target.value);
    }

    function handleChangeDate(event: React.ChangeEvent<HTMLInputElement>): void {
        setDate(event.target.value);
        console.log(event.target.value);
    }

    function handleKeyEnter(event: React.KeyboardEvent): void {
        if (event.key === "Enter") {
            if (forecast === '7days' && city !== '') {
                getWeatherForecastOnSevenDays!(city);
            } else if (city !== '' && date !== '') {
                console.log(forecast);
            }
        }
    }

    // useEffect(():void => {
    //     if (city !== '' && date !== '' && form !== null) {
    //         // e.preventDefault();
    //         // form.current!.submit();
    //         //ф-ция вызывающая api
    //         console.log(city, date);
    //     } else  if (forecast === '7days' && city !== '') {
    //         // e.preventDefault();
    //         // form.current!.submit();
              
    //     }
    // }, [city, date, form, forecast]);

    // const onFocus = () => {
    //     this.type="date";
    // }

    return (
        <div className="forecast">
            <h3 className="forecast__title">{forecast === '7days' ? '7 Days Forecast' : 'Forecast for a Date in the Past'}</h3>
            <form ref={form} className="forecast__form" name={forecast} onKeyPress={handleKeyEnter}>
                <select className="forecast__input" required onChange={handleChangeSelect}>
                    <option hidden disabled selected>Select city</option>
                    <option className="forecast__select-item">Самара</option>
                    <option className="forecast__select-item">Тольятти</option>
                    <option className="forecast__select-item">Саратов</option>
                    <option className="forecast__select-item">Казань</option>
                    <option className="forecast__select-item">Краснодар</option>
                </select>
                {forecast === 'day' && 
                (
                    <input type="date" className="forecast__input forecast__input_type_data" placeholder='Select date' required onChange={handleChangeDate}></input>
                )}
            </form>
            {/* <InfoBlock /> */}
            <CardList cards={cards} forecast={forecast} />
        </div>
    );
}

export default SearchForecast;