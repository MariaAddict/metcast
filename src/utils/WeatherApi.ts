import { Coordinates } from '../types';

const apiKey: string = "4a12c294eb4c1a76d3ce99b78c9b8b4a";
const BASE_URL: string = "https://api.openweathermap.org/data/2.5/onecall";

type Headers = {
    headers: {
        'Content-Type': string,
        authorization: string,
    }
}

const handleResponse = (res: any) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

class WeatherApi {
    _url: string;
    _headers: {
        'Content-Type': string,
    };

    constructor(url: string, { headers }: Headers) {
        this._url = url;
        this._headers = headers;
    }

    getWeatherForecastOnSevenDays(coordinates: Coordinates) {
        return fetch(`${this._url}?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${apiKey}`, {
            method: 'GET',
        })
            .then(handleResponse)
    }

    getWeatherForecastOnDateinThePast(coordinates: Coordinates, date: number) {
        return fetch(`${this._url}/timemachine?lat=${coordinates.lat}&lon=${coordinates.lon}&dt=${date}&units=metric&appid=${apiKey}`, {
            method: 'GET',
        })
            .then(handleResponse)
    }
}

const apiWeather = new WeatherApi(BASE_URL, {
    headers: {
        'Content-Type': 'application/json',
        authorization: apiKey,
    }
});

export default apiWeather;
