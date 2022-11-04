import { citiesWatcher } from "./cities-saga";
import { weatherWatcher } from "./weather-saga"
import { fork,all } from "redux-saga/effects"


export function* rootSaga() {
     yield all([
          fork(citiesWatcher),
          fork(weatherWatcher)
     ])
}