import { Card } from "./card/card";
import "./cards.css"
import {useSelector} from "react-redux";
import {ErrorBoundry} from "../../../ui";

export const Cards = () => {
    const days = useSelector(state => state.weather.weather.forecast.forecastday)

    if (days[0].date !== undefined) {
        return (
            <div className="cards">
                {
                    days.map((day) => {
                        return (
                            <ErrorBoundry>
                                <Card card={day} key={day.date_epoch}/>
                            </ErrorBoundry>)

                    })
                }
            </div>
        )

    }
}