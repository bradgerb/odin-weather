const processData = (data)=> {
    console.log(data);
    getWeatherInfo(data);
}

const getWeatherInfo = (data)=> {
    let weatherInfo = data.days;
    console.table(weatherInfo);
}

export { processData }