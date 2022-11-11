import "./card.css"
import {useEffect} from "react";

export const Card = ( {card} ) => {
    const {
        date,
        day: {
            avgtemp_c,
            condition: {
                code,
                icon,
                text},
            maxtemp_c,
            mintemp_c,
            maxwind_kph,
            totalprecip_mm,
        },
    } = card;

    const dayOfWeek = (date) => {
        const day = new Date(date).getDay();
        switch (day) {
            case 0 :
                return "Вс";
            case 1:
                return "Пн";
            case 2:
                return "Вт";
            case 3:
                return "Ср";
            case 4:
                return "Чт";
            case 5:
                return "Пт";
            case 6:
                return "Сб";
            default:
                return;
        }
    }

    return (
        <div className="card" key = {card.date}>
            <div className="card-day">{dayOfWeek(date)}</div>
            <div className="card-date">{date.slice(2,4)}.{date.slice(5,7)}.{date.slice(8,12)}</div>
            <div className="card-icon card-icon-text" >
                <img src={icon}/>
            </div>
            <div className="card-weather">{maxtemp_c} {`\u2103`}</div>
            <div className="card-country">{mintemp_c} {`\u2103`}</div>
            <div className="card-precip">{maxwind_kph} kph</div>
        </div>
    );
};