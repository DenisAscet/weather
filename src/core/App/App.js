import {MainPage} from "../../pages";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Header} from "../../pages/Main-page/header/header";
import {ErrorIndicator} from "../../ui";


export const App = () => {

    const dispatch = useDispatch()
    const cities = useSelector(store => store.cities.cities)
    const weatherState = useSelector(state => state.weather.weather)

    useEffect(() =>{
        dispatch({type:"FETCH_CITIES"})
    },[])

    if (weatherState.error){
        return(
            <ErrorIndicator></ErrorIndicator>
        )
    }
    return (
    <div className="App">
        <Header/>
        <MainPage/>
    </div>
    );
}
