const weatherDisplay = document.querySelector('.weatherDisplay');

const updateWeatherDisplay = (processedData)=> {
    clearWeatherDisplay();

    console.table(processedData.weatherInfo);
    console.log(processedData.currentConditions);

    for (let i = 0; i < processedData.weatherInfo.length; i++){
        const day = document.createElement('div');
        day.textContent = processedData.weatherInfo[i].date;
        weatherDisplay.appendChild(day);
    }
};

const clearWeatherDisplay = ()=>{
    while (weatherDisplay.firstChild) {
        weatherDisplay.removeChild(weatherDisplay.firstChild);
    }
}

export { updateWeatherDisplay }