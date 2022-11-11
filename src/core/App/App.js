import {MainPage} from "../../pages";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Header} from "../../pages/Main-page/header/header";
import {ErrorIndicator} from "../../ui";
import {fetchCities} from "../../ui/store/reducers/action-creactors/cities-action-creators";


export const App = () => {

    const dispatch = useDispatch()
    const cities = useSelector(store => store.cities.cities)
    const weatherState = useSelector(state => state.weather.weather)

    useEffect(() =>{
        dispatch(fetchCities())
    },[])

    if (weatherState.error) {
        return(
            <ErrorIndicator/>
        )
    }
    return (
    <div className="App">
        <Header/>
        <MainPage/>
    </div>
    );
}
