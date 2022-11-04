import "./card.css"

export const Card = ({card}) => {
    const {
        day,
        date,
        icon,
        weather,
        country,
        precip
    } = card

    return (
        <div className="card" key={date}>
            <div className="card-day">{day}</div>
            <div className="card-date">{date}</div>
            <div className="card-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png"/></div>
            <div className="card-weather">{weather}</div>
            <div className="card-country">{country}</div>
            <div className="card-precip">{precip}</div>
        </div>
    )
}