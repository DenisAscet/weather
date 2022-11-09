import "./DayWeather.css"
import { useSelector } from "react-redux"
import { imgReducer } from "../../../ui/imgReducer/img-reducer";
import {ErrorIndicator} from "../../../ui";

export const DayWeather = () => {

    const weather = useSelector(state => state.weather.weather)

    const temperature = useSelector(state => state.weather.weather.current.temp_c)
    const pressure = useSelector(state => state.weather.weather.current.pressure_mb)
    const precipitation = useSelector(state => state.weather.weather.current.precip_mm)
    const wind = useSelector(state => state.weather.weather.current.wind_kph)

    if (weather.error){
        return <ErrorIndicator/>
    }

    return (
        <div className="day-weather">
            <div className="day-temperature day-string">
                <img src={imgReducer("temperature")} />
                <div className="attribute-name">temperature:</div>
                <div className="attribute">
                    {temperature} {`\u2103`}
                </div>
            </div>
            <div className="day-pressure day-string">
                <img src={imgReducer("pressure")}/>
                <div className="attribute-name">pressure:</div>
                <div className="attribute">
                    {pressure} mm Hg
                </div>
            </div>
            <div className="day-precipitation day-string">
                <img src={imgReducer("precipitation")}/>
                <div className="attribute-name">precipitation:</div>
                <div className="attribute">
                    {precipitation} mm
                </div>
            </div>
            <div className="day-wind day-string">
                <img src={imgReducer("wind")}/>
                <div className="attribute-name">wind:</div>
                <div className="attribute">
                    {wind} kph
                </div>
            </div>
        </div>
    )
}