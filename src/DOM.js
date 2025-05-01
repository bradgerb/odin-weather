const weatherDisplay = document.querySelector('.weatherDisplay');
const locationHeader = document.querySelector('.locationHeader');

const updateWeatherDisplay = (processedData)=> {
    clearWeatherDisplay();
    addWeatherHeaders();
    addlocationDisplay(processedData);

    for (let i = 0; i < processedData.weatherInfo.length; i++){
        const date = document.createElement('div');
        date.classList.add('day');
        date.textContent = processedData.weatherInfo[i].date;
        weatherDisplay.appendChild(date);

        const maxTemp = document.createElement('div');
        maxTemp.classList.add('day');
        maxTemp.textContent = `${processedData.weatherInfo[i].maxTemp} \u00B0F`;
        weatherDisplay.appendChild(maxTemp);

        const minTemp = document.createElement('div');
        minTemp.classList.add('day');
        minTemp.textContent = `${processedData.weatherInfo[i].minTemp} \u00B0F`;
        weatherDisplay.appendChild(minTemp);

        const precipitationChance = document.createElement('div');
        precipitationChance.classList.add('day');
        precipitationChance.textContent = `${processedData.weatherInfo[i].precipitationChance} %`;
        weatherDisplay.appendChild(precipitationChance);
    }
};

const addlocationDisplay = (processedData)=>{
    locationHeader.textContent = processedData.location;
}

const clearWeatherDisplay = ()=>{
    while (weatherDisplay.firstChild) {
        weatherDisplay.removeChild(weatherDisplay.firstChild);
    }
}

const addWeatherHeaders = ()=>{
    const dateHeader = document.createElement('div');
    dateHeader.classList.add('weatherHeader');
    dateHeader.textContent = 'Date';
    weatherDisplay.appendChild(dateHeader);

    const maxTempHeader = document.createElement('div');
    maxTempHeader.classList.add('weatherHeader');
    maxTempHeader.textContent = 'Max Temp';
    weatherDisplay.appendChild(maxTempHeader);

    const minTempHeader = document.createElement('div');
    minTempHeader.classList.add('weatherHeader');
    minTempHeader.textContent = 'Min Temp';
    weatherDisplay.appendChild(minTempHeader);

    const precipitationChance = document.createElement('div');
    precipitationChance.classList.add('weatherHeader');
    precipitationChance.textContent = 'Precipitation';
    weatherDisplay.appendChild(precipitationChance);
}

export { updateWeatherDisplay }
