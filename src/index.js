import "./styles.css";

const weatherDataForm = document.getElementById('weatherDataForm');

async function getWeather(location) {
    try{
        console.log(location);
    } catch(error){
        console.log('ERROR');
    };
};

weatherDataForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(weatherDataForm);
    getWeather(formData.get('location'));
});
