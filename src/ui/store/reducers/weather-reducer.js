export const weatherReducer = (state, action) => {
    if (state === undefined){
        return{
            weather: {
                location: {
                    country: undefined,
                    localtime: undefined,
                    name: undefined,
                    region: undefined,
                },
                current: {
                    is_day: undefined,
                    cloud: undefined,
                    feelslike_c: undefined,
                    temp_c: undefined,
                    visibility_in_km: undefined,
                    wind_kph: undefined,
                    pressure_mb: undefined,
                    humidity: undefined,
                    gust_kph: undefined,
                    condition: {
                        code: undefined,
                        icon: undefined,
                        text: undefined,
                    }
                },
                forecast: {
                    forecastday: [
                        {
                            astro: {
                                moonrise: undefined,
                                sunrise: undefined,
                                sunset: undefined,
                            },
                            date: undefined,
                            date_epoch: undefined,
                            day: {
                                avghumidity: undefined,
                                avgtemp_c: undefined,
                                avgtemp_f: undefined,
                                avgvis_km: undefined,
                                avgvis_miles: undefined,
                                condition: {
                                    code: undefined,
                                    icon: undefined,
                                    text: undefined,
                                },
                                daily_chance_of_rain: undefined,
                                daily_chance_of_snow: undefined,
                                daily_will_it_rain: undefined,
                                daily_will_it_snow: undefined,
                                maxtemp_c: undefined,
                                maxtemp_f: undefined,
                                maxwind_kph: undefined,
                                maxwind_mph: undefined,
                                mintemp_c: undefined,
                                mintemp_f: undefined,
                                totalprecip_in: undefined,
                                totalprecip_mm: undefined,
                                totalsnow_cm: undefined,
                                uv: undefined,
                            }

                        },
                        {
                            astro: {
                                moonrise: undefined,
                                sunrise: undefined,
                                sunset: undefined,
                            },
                            date: undefined,
                            date_epoch: undefined,
                            day: {
                                avghumidity: undefined,
                                avgtemp_c: undefined,
                                avgtemp_f: undefined,
                                avgvis_km: undefined,
                                avgvis_miles: undefined,
                                condition: {
                                    code: undefined,
                                    icon: undefined,
                                    text: undefined,
                                },
                                daily_chance_of_rain: undefined,
                                daily_chance_of_snow: undefined,
                                daily_will_it_rain: undefined,
                                daily_will_it_snow: undefined,
                                maxtemp_c: undefined,
                                maxtemp_f: undefined,
                                maxwind_kph: undefined,
                                maxwind_mph: undefined,
                                mintemp_c: undefined,
                                mintemp_f: undefined,
                                totalprecip_in: undefined,
                                totalprecip_mm: undefined,
                                totalsnow_cm: undefined,
                                uv: undefined,
                            }
                        },
                        {
                            astro: {
                                moonrise: undefined,
                                sunrise: undefined,
                                sunset: undefined,
                            },
                            date: undefined,
                            date_epoch: undefined,
                            day: {
                                avghumidity: undefined,
                                avgtemp_c: undefined,
                                avgtemp_f: undefined,
                                avgvis_km: undefined,
                                avgvis_miles: undefined,
                                condition: {
                                    code: undefined,
                                    icon: undefined,
                                    text: undefined,
                                },
                                daily_chance_of_rain: undefined,
                                daily_chance_of_snow: undefined,
                                daily_will_it_rain: undefined,
                                daily_will_it_snow: undefined,
                                maxtemp_c: undefined,
                                maxtemp_f: undefined,
                                maxwind_kph: undefined,
                                maxwind_mph: undefined,
                                mintemp_c: undefined,
                                mintemp_f: undefined,
                                totalprecip_in: undefined,
                                totalprecip_mm: undefined,
                                totalsnow_cm: undefined,
                                uv: undefined,
                            }
                        },
                        {
                            astro: {
                                moonrise: undefined,
                                sunrise: undefined,
                                sunset: undefined,
                            },
                            date: undefined,
                            date_epoch: undefined,
                            day: {
                                avghumidity: undefined,
                                avgtemp_c: undefined,
                                avgtemp_f: undefined,
                                avgvis_km: undefined,
                                avgvis_miles: undefined,
                                condition: {
                                    code: undefined,
                                    icon: undefined,
                                    text: undefined,
                                },
                                daily_chance_of_rain: undefined,
                                daily_chance_of_snow: undefined,
                                daily_will_it_rain: undefined,
                                daily_will_it_snow: undefined,
                                maxtemp_c: undefined,
                                maxtemp_f: undefined,
                                maxwind_kph: undefined,
                                maxwind_mph: undefined,
                                mintemp_c: undefined,
                                mintemp_f: undefined,
                                totalprecip_in: undefined,
                                totalprecip_mm: undefined,
                                totalsnow_cm: undefined,
                                uv: undefined,
                            }
                        },
                        {
                            astro: {
                                moonrise: undefined,
                                sunrise: undefined,
                                sunset: undefined,
                            },
                            date: undefined,
                            date_epoch: undefined,
                            day: {
                                avghumidity: undefined,
                                avgtemp_c: undefined,
                                avgtemp_f: undefined,
                                avgvis_km: undefined,
                                avgvis_miles: undefined,
                                condition: {
                                    code: undefined,
                                    icon: undefined,
                                    text: undefined,
                                },
                                daily_chance_of_rain: undefined,
                                daily_chance_of_snow: undefined,
                                daily_will_it_rain: undefined,
                                daily_will_it_snow: undefined,
                                maxtemp_c: undefined,
                                maxtemp_f: undefined,
                                maxwind_kph: undefined,
                                maxwind_mph: undefined,
                                mintemp_c: undefined,
                                mintemp_f: undefined,
                                totalprecip_in: undefined,
                                totalprecip_mm: undefined,
                                totalsnow_cm: undefined,
                                uv: undefined,
                            }
                        },
                        {
                            astro: {
                                moonrise: undefined,
                                sunrise: undefined,
                                sunset: undefined,
                            },
                            date: undefined,
                            date_epoch: undefined,
                            day: {
                                avghumidity: undefined,
                                avgtemp_c: undefined,
                                avgtemp_f: undefined,
                                avgvis_km: undefined,
                                avgvis_miles: undefined,
                                condition: {
                                    code: undefined,
                                    icon: undefined,
                                    text: undefined,
                                },
                                daily_chance_of_rain: undefined,
                                daily_chance_of_snow: undefined,
                                daily_will_it_rain: undefined,
                                daily_will_it_snow: undefined,
                                maxtemp_c: undefined,
                                maxtemp_f: undefined,
                                maxwind_kph: undefined,
                                maxwind_mph: undefined,
                                mintemp_c: undefined,
                                mintemp_f: undefined,
                                totalprecip_in: undefined,
                                totalprecip_mm: undefined,
                                totalsnow_cm: undefined,
                                uv: undefined,
                            }
                        },
                        {
                            astro: {
                                moonrise: undefined,
                                sunrise: undefined,
                                sunset: undefined,
                            },
                            date: undefined,
                            date_epoch: undefined,
                            day: {
                                avghumidity: undefined,
                                avgtemp_c: undefined,
                                avgtemp_f: undefined,
                                avgvis_km: undefined,
                                avgvis_miles: undefined,
                                condition: {
                                    code: undefined,
                                    icon: undefined,
                                    text: undefined,
                                },
                                daily_chance_of_rain: undefined,
                                daily_chance_of_snow: undefined,
                                daily_will_it_rain: undefined,
                                daily_will_it_snow: undefined,
                                maxtemp_c: undefined,
                                maxtemp_f: undefined,
                                maxwind_kph: undefined,
                                maxwind_mph: undefined,
                                mintemp_c: undefined,
                                mintemp_f: undefined,
                                totalprecip_in: undefined,
                                totalprecip_mm: undefined,
                                totalsnow_cm: undefined,
                                uv: undefined,
                            },
                        },
                    ],
                },
            },
        };
    }

    switch (action.type){
        case "FETCH_WEATHER_REQUEST":
            return {
               ...state,
                loading:true,
                error: false
            };
        case "FETCH_WEATHER_SUCCESS":
            return {
                ...state,
                weather:action.payload,
                loading:false,
                error: false
            };
        case "FETCH_WEATHER_FAILURE":
            return {
                ...state,
                loading:false,
                error: action.payload
            };
        default:
            return state;

    }
}