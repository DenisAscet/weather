import { put,spawn,fork,takeEvery ,call } from "redux-saga/effects"
import {fetchCitiesRequest, successCitiesSuccess} from "../reducers/action-creactors/cities-action-creators";

async function getCities() {

    const cities = []

    await fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
        .then(data => data.json())
        .then(data =>{
            data.data.map((target) => {
                cities.push(target.city)
            })
        });
    return cities;
}

export function* loadCities() {
    const data = yield call(getCities);
    yield put(fetchCitiesRequest());
    yield put(successCitiesSuccess(data));
}

export function* workerCities() {
    yield spawn(loadCities);
}

export function* citiesWatcher() {
    yield takeEvery("FETCH_CITIES",workerCities);
}