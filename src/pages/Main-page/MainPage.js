import {DayWeather} from "./day-weather/DayWeather";
import { DayInfo} from "./day-info/DayInfo"
import { Cards } from "../index"
import {ErrorBoundry, ErrorIndicator} from "../../ui";
import {useSelector} from "react-redux";

export const MainPage = () => {

    const weatherError = useSelector(state => state.weather.error)

    const DayRenderer = () => {
        if (weatherError){
            return(
                <ErrorIndicator/>
            )
        } else {
            return (
                <div style={{display:"flex"}}>
                    <DayInfo/>
                    <DayWeather/>
                </div>
            )
        }
    }

    return(
        <div>
            {DayRenderer()}
            {/*<div style={{display:"flex"}}>*/}
            {/*    <DayInfo/>*/}
            {/*    <DayWeather/>*/}
            {/*</div>*/}
            <ErrorBoundry>
                <Cards/>
            </ErrorBoundry>
        </div>
    )
}