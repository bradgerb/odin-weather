const processData = (data)=> {
    const weatherInfo = getWeatherInfo(data);
    const currentConditions = getCurrentConditions(data);

    return { weatherInfo, currentConditions }
}

const getWeatherInfo = (data)=> {
    let weatherInfo = [];

    for (let i = 0; i < data.days.length; i++){
        let day = {};
        day.date = data.days[i].datetime;
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

export { processData }