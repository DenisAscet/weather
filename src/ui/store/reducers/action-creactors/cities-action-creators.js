export const fetchCitiesRequest = () => ( { type: "FETCH_CITIES_REQUEST" } );
export const fetchWeatherRequest = () => ( { type: "FETCH_WEATHER_REQUEST" } );
export const fetchCitiesFailure = ( payload ) => ( { type: "FETCH_CITIES_FAILURE", payload:payload } );
export const fetchWeatherFailure = ( payload ) => ( { type: "FETCH_WEATHER_FAILURE", payload:payload } );
export const successCitiesSuccess = ( payload ) => ( { type: "FETCH_CITIES_SUCCESS", payload:payload } );
export const fetchWeatherSuccess = ( payload ) => ( { type: "FETCH_WEATHER_SUCCESS", payload:payload } );
export const fetchCities = () => ( { type:"FETCH_CITIES" } );
export const fetchWeather = () => ( { type: "FETCH_WEATHER" } );
export const setCurrentCity = ( payload ) => ( { type: "SET_CURRENT_CITY", payload: payload } );