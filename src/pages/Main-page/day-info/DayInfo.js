import "./DayInfo.css"
import { useSelector } from "react-redux";
import {imgReducer} from "../../../ui/imgReducer/img-reducer";
import {ErrorIndicator} from "../../../ui";

export const DayInfo = () => {


    const city = useSelector(state => state.weather.weather.location.name)
    let temp = useSelector( state => state.weather.weather.current.temp_c )
    if(temp.toString().length > 2){
        temp = temp.toString().slice(0,1)
    }
    const weatherIcon = useSelector(state => state.weather.weather.current.condition.icon)

    const weatherState = useSelector(state => state.weather.weather)


    const updateTime = (date) => {
        let minutes = date.getMinutes();
        let hours = date.getHours()

        if(minutes<10) minutes = "0"+minutes;
        if(hours<10) hours = "0"+ hours;

        return{
            hours:hours,
            minutes:minutes
        }
    }

    let time = updateTime(new Date())

    setTimeout(() => {
        time = updateTime(new Date())
    }, 60000)

    if (weatherState.error){
        return <ErrorIndicator/>
    }

    return(
       <div className="day-info">
           <div className="text-block">
               <div className="temperature text-in-info">
                   {temp}
                   {`\u2103`}</div>
               <div className="day text-in-info">today</div>
               <div className="time text-in-info">time: {time.hours}:{time.minutes}</div>
               <div className="city text-in-info"> City:
                   {city}
               </div>
           </div>
           <img src={weatherIcon}/>
       </div>
    )
}