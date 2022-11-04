export const citiesReducer = (state, action) => {
    if (state === undefined){
        return{
            cities: [],
            error: false,
            loading:true,
            currentCity: "MARIEHAMN",
        }
    }

    switch (action.type){
        case "FETCH_CITIES_REQUEST":
            return {
                ...state,
                cities: [],
                error: false,
                loading:true
            }
        case "FETCH_CITIES_SUCCESS":
            return{
                ...state,
                cities: action.payload,
                error: false,
                loading:false
            }
        case "FETCH_CITIES_FAILURE":
            return{
                ...state,
                cities: [],
                error: action.payload,
                loading:false
            }
        case"SET_CURRENT_CITY":
            return {
                ...state,
                currentCity: action.payload
            }

        default:
            return state
    }
}