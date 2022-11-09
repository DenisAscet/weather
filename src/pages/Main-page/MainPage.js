import {DayWeather} from "./day-weather/DayWeather";
import { DayInfo} from "./day-info/DayInfo"
import { Cards } from "../index"
import {useDispatch, useSelector} from "react-redux";
import {ErrorBoundry} from "../../ui";

export const MainPage = () => {

    return(
        <div>
            <div style={{display:"flex"}}>
                <DayInfo/>
                <DayWeather/>
            </div>
            <ErrorBoundry>
                <Cards/>
            </ErrorBoundry>
        </div>
    )
}