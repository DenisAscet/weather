import "./DayWeather.css"
import { useSelector } from "react-redux"
import { imgReducer } from "../../../ui/imgReducer/img-reducer";
import {useEffect} from "react";

export const DayWeather = (dayWeather) => {

    const temperature = useSelector(state => state.weather.weather.current.temp_c)
    const pressure = useSelector(state => state.weather.weather.current.pressure_mb)
    const precipitation = useSelector(state => state.weather.weather.current.precip_mm)
    const wind = useSelector(state => state.weather.weather.current.wind_kph)
    const city = document.getElementById("city-selector").value

    useEffect(() => {

    },[])

    return (
        <div className="day-weather">
            <div className="day-temperature day-string">
                <img src={imgReducer("rain")} />
                <div className="attribute-name">temperature:</div>
                <div className="attribute">
                    {temperature}
                </div>
            </div>
            <div className="day-pressure day-string">
                <img src={imgReducer("rain")}/>
                <div className="attribute-name">pressure:</div>
                <div className="attribute">
                    {pressure}
                </div>
            </div>
            <div className="day-precipitation day-string">
                <img src={imgReducer("rain")}/>
                <div className="attribute-name">precipitation:</div>
                <div className="attribute">
                    {precipitation}
                </div>
            </div>
            <div className="day-wind day-string">
                <img src={imgReducer("rain")}/>
                <div className="attribute-name">wind:</div>
                <div className="attribute">
                    {wind}
                </div>
            </div>
        </div>
    )
}