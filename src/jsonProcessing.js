import { format } from 'date-fns'

const processData = (data)=> {
    const weatherInfo = getWeatherInfo(data);
    const currentConditions = getCurrentConditions(data);
    const location = getLocation(data);

    return { weatherInfo, currentConditions, location }
}

const getWeatherInfo = (data)=> {
    let weatherInfo = [];

    for (let i = 0; i < data.days.length; i++){
        let day = {};
        day.date = format(data.days[i].datetime, "MMMM do");
        day.maxTemp = data.days[i].tempmax;
        day.minTemp = data.days[i].tempmin;
        day.precipitationChance = data.days[i].precipprob;
        weatherInfo.push(day);
    }

    return weatherInfo
}

const getCurrentConditions = (data)=> {
    let currentConditions = data.currentConditions.conditions;

    return currentConditions
}

const getLocation = (data)=> {
    let location = data.resolvedAddress;
    
    return location
}

export { processData }
