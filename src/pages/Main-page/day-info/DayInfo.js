import "./DayInfo.css"
import { useSelector } from "react-redux";
import {imgReducer} from "../../../ui/imgReducer/img-reducer";

export const DayInfo = () => {

    const city = useSelector(state => state.weather.weather.location.name)
    console.log("city", city)
    const temp = useSelector( state => state.weather.weather.current.temp_c )
    console.log(temp)


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


    return(
       <div className="day-info">
           <div className="text-block">
               <div className="temperature">
                   {temp}
                   {`\u2103`}</div>
               <div className="day">today</div>
               <div className="time">time: {time.hours}:{time.minutes}</div>
               <div className="city"> City:
                   {city}
               </div>
           </div>
           <img src={imgReducer("rain")}/>
       </div>
    )
}