import "./header.css"
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchWeather, fetchWeatherFailure, setCurrentCity} from "../../../ui";

export const Header = () => {

    const dispatch = useDispatch()
    const [currentCity, changeCurrentCity] = useState("MARIEHAMN")
    const cities = useSelector(store => store.cities.cities)


    useEffect(() => {
        dispatch(setCurrentCity(currentCity))
        if (cities) {
            dispatch(fetchWeather())
        }
        dispatch(fetchWeatherFailure(false))

    },[currentCity, cities ])

    return(
        <div className="header">
                <div className="left-block">
                    <img src="https://cdn-icons-png.flaticon.com/128/2862/2862807.png"
                         className="header-img"/>
                    <div className="header-name">
                        REACT WEATHER
                    </div>
                </div>
                <div className="right-block">
                    <select className="custom-select"
                            id="city-selector"
                            onChange={() => changeCurrentCity(document.getElementById("city-selector").value)}>
                            {
                                cities.map(city => {
                                    return(
                                        <option
                                            key ={cities.indexOf(city)}
                                            value={city}>
                                        {city}
                                    </option>
                                    )
                                })
                            }
                    </select>
                </div>
        </div>
    )
}