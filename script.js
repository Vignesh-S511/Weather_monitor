//http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial


let API_KEY = "1749d263863045917a33c8f20b9b6132";

getweatherData = (city) =>{
      const URL = 'https://api.openweathermap.org/data/2.5/weather';

      const FULL_Url = 'https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid='+API_KEY+'&units=celsius';      
    //   console.log(FULL_Url)
      const weatherPromise = fetch(FULL_Url);
      console.log(city)

      return weatherPromise.then((response)=>{
        return response.json()
      })

}
function searchCity(){
    const city = document.getElementById('city-input').value;

    getweatherData(city)
    .then((response)=>{
        showWeatherData(response)
        console.log(response.main.temp)
    })
    .catch((err)=>{
        console.log(err)
    })
}
showWeatherData = (weatherData) =>{
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText=weatherData.weather[0].main;
    document.getElementById('temp').innerText=weatherData.main.temp;
    document.getElementById('min-temp').innerText=weatherData.main.temp_min;
    document.getElementById('max-temp').innerText=weatherData.main.temp_max;

}