import { Card } from "./card/card";
import "./cards.css"

export const Cards = () => {

    const days = [
        {
            day: 'day',
            date: 1,
            icon:'icon',
            weather: 'weather',
            country:'country',
            precip:'precip'
        },
        {
            day:'day2',
            date:2,
            icon: 'icon2',
            weather:'weather2',
            country:'country2',
            precip:"precip2"
        },
        {
            day:'day2',
            date:3,
            icon: 'icon2',
            weather:'weather2',
            country:'country2',
            precip:"precip2"
        },
        {
            day:'day2',
            date:4,
            icon: 'icon2',
            weather:'weather2',
            country:'country2',
            precip:"precip2"
        },
        {
            day:'day2',
            date:5,
            icon: 'icon2',
            weather:'weather2',
            country:'country2',
            precip:"precip2"
        },
        {
            day:'day2',
            date:6,
            icon: 'icon2',
            weather:'weather2',
            country:'country2',
            precip:"precip2"
        },
        {
            day:'day2',
            date:7,
            icon: 'icon2',
            weather:'weather2',
            country:'country2',
            precip:"precip2"
        }
    ]

    return(
        <div className="cards">
            {
                days.map((day) => {

                    return(<Card card={day} key={day.date}/>)

                })
            }
        </div>
    )
}