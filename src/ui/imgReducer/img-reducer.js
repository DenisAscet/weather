export const imgReducer = (type) => {
    switch (type){
        case "temperature" :
            return "https://img.icons8.com/stickers/2x/temperature-high.png";
        case "pressure" :
            return "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-thermometer-weather-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png";
        case "precipitation" :
            return "https://img.icons8.com/clouds/2x/rain-sensor.png";
        case "wind" :
            return "https://img.icons8.com/clouds/2x/wind.png";
    }
}