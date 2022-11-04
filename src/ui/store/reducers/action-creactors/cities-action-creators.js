export const fetchCities = () => ({type:"FETCH_CITIES_REQUEST"});
export const fetchWeather = () => ({type:"FETCH_WEATHER_REQUEST"});
export const failCities = (payload) => ({type:"FETCH_CITIES_FAILURE", payload:payload});
export const failWeather = (payload) => ({type:"FETCH_WEATHER_FAILURE", payload:payload});
export const successCities = (payload) => ({type: "FETCH_CITIES_SUCCESS", payload:payload});
export const successWeather = (payload) => ({type: "FETCH_WEATHER_SUCCESS", payload:payload});
