import "./styles.css";
import { processData } from "./jsonProcessing";

const weatherDataForm = document.getElementById('weatherDataForm');

async function getWeather(location) {
    try{
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=HQEVSF9RKDLNF6WJDQU6A82EN', {mode: 'cors'});
        const weatherData = await response.json();
        processData(weatherData);
    } catch(error){
        console.log('ERROR');
    };
};

weatherDataForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(weatherDataForm);
    getWeather(formData.get('location'));
});
