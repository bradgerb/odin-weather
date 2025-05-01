const img = document.querySelector('img');

async function getGif(currentWeather) {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=yCqQvUeU4EELB999V8w4PHYJ3DSXQqar&s=${currentWeather}-weather`, {mode: 'cors'})
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    // eslint-disable-next-line no-unused-vars
    } catch(error){
        console.log("Gif error");
    };
};

export { getGif }
