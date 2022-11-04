import { createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools} from "redux-devtools-extension";

import { rootSaga } from "./sagas/rootSaga"
import { weatherReducer } from "./reducers/weather-reducer";
import { citiesReducer } from "./reducers/cities-reducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cities:citiesReducer,
    weather:weatherReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)