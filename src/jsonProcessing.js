const processData = (data)=> {
    console.log(data);
    getWeatherInfo(data);
}

const getWeatherInfo = (data)=> {
    let weatherInfo = data.days;
    console.table(weatherInfo);

    let usefulWeatherInfo = [];

    for (let i = 0; i < data.days.length; i++){
        let day = {};
        day.date = data.days[i].datetime;
        day.maxTemp = data.days[i].tempmax;
        day.minTemp = data.days[i].tempmin;
        usefulWeatherInfo.push(day);
    }

    console.log(usefulWeatherInfo);
}

const getCurrentConditions = (data)=> {
    let currentConditions = data.currentConditions.conditions;
    console.log(currentConditions);
}

export { processData, getCurrentConditions }