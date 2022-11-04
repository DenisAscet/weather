export const weatherReducer = (state, action) => {
    if (state=== undefined){
        return{
            current: {
                cloud: undefined,
                feelsLike:undefined,
                temp: undefined,
                visibility_in_km:undefined,
                wind:undefined,
                pressure:undefined,
                humidity:undefined
            }
        }
    }

    switch (action.type){
        case "FETCH_WEATHER_REQUEST":
            return {
               ...state,
                loading:true,
                error: false
            }
        case "FETCH_WEATHER_SUCCESS":
            console.log("weather success")
            console.log(action.payload)
            return {
                ...state,
                weather:action.payload,
                loading:false,
                error: false
            }
        case "FETCH_WEATHER_FAILURE":
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state

    }
}