import { put,spawn, takeEvery, call } from "redux-saga/effects";
import {
    fetchWeatherFailure,
    fetchWeatherRequest,
    fetchWeatherSuccess
} from "../reducers/action-creactors/cities-action-creators";

export const  getWeather = async ()  => {

    const _APIKey = "69f65edffd8c4f1e909151927221111"


    const select = document.getElementById("city-selector")
    const cityData = select.value
    const city = cityData[0].toUpperCase() + cityData.slice(1).toLowerCase()

    let weather = {}
        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${_APIKey}&q=${city}&days=7`)
            .then(data=> data.json())
            .then(data => weather = data)
        return weather
}

export function* loadWeather() {

    const data = yield call(getWeather)

    if (!data.error) {
        yield put(fetchWeatherRequest())
        yield put(fetchWeatherSuccess(data))
    } else {
        console.log(data)
        yield put(fetchWeatherFailure(data))
    }
}

export function* weatherWorker() {
    yield spawn(loadWeather)
}

export function* weatherWatcher() {
    yield takeEvery("FETCH_WEATHER",weatherWorker)
}