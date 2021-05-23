import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import apiWeather from '../../utils/WeatherApi';
import { Cards, Coordinates } from '../../types';

function App() {

  const getCoordinates = (city: string):Coordinates => {
    let cordinates: Coordinates;

    switch (city) {
      case 'Самара': cordinates = {
        lat: 53.195873,
        lon: 50.100193,
      }
      break;
      case 'Тольятти': cordinates = {
        lat: 53.507836,
        lon: 49.420393,
      }
      break;
      case 'Саратов': cordinates = {
        lat: 51.533557,
        lon: 46.034257,
      }
      break;
      case 'Казань': cordinates = {
        lat: 55.796127,
        lon: 49.106405,
      }
      break;
      case 'Краснодар': cordinates = {
        lat: 45.035470,
        lon: 38.975313,
      }
      break;
      default: console.log("Нет такого города");
    }

    return cordinates!;
  }

  const getWeatherForecastOnSevenDays = (city: string): any => {
    console.log('city in big App:' ,city);
    
    const cordinatesCity:Coordinates = getCoordinates(city);

    apiWeather.getWeatherForecastOnSevenDays(cordinatesCity).then((data:any) => {
      console.log('data', data);
    }).catch((err: any) => {
      console.log(err);
    });
  }

  return (
    <div className="app">
      <Header />
      <Main getWeatherForecastOnSevenDays={getWeatherForecastOnSevenDays} />
      <Footer />
    </div>
  );
}

export default App;
