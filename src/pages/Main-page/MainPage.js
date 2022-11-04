import {DayWeather} from "./day-weather/DayWeather";
import { DayInfo} from "./day-info/DayInfo"
import { Cards } from "../index"
import {useDispatch, useSelector} from "react-redux";

export const MainPage = () => {

    const dispatch = useDispatch()
    const currentCity = useSelector(store=> store.cities.currentCity)

    return(
        <div>
            <div style={{display:"flex"}}>
                <DayInfo/>
                <DayWeather/>
            </div>
            <Cards/>
        </div>
    )
}