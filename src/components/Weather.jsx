// import React from 'react'
import '../CSSFILES/Weather.module.css'
import { useState} from 'react';
// import axios from 'axios';
let Weather = () => {

    let [WeatherInfo, setWeatherInfo] = useState("");
    let [city, setCity] = useState('London');

    let fetchApi =async () =>
    {
        let apiKey ="d957b1616234679503dc69e484b1f79a";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
        try{
            let data = await fetch(apiUrl);
            let finaldata = await data.json();
            console.log(finaldata); 
            // setCity(finaldata)
      if(finaldata.cod == 200)
            {
            setWeatherInfo(finaldata)
            console.log(finaldata);
            }
       else {
              console.log("enter crct data");
            }
            }catch(err)
        {
           console.log(err)
        }
    };
     
  return (
<>
  <section>
    <h2>Weather</h2>
    <input type="text" placeholder='Enter city Name' onChange={(e)=>setCity(e.target.value)} />
    <button onClick={fetchApi}>Search</button>
    <div className='first '>
      {WeatherInfo && (<>
      <h1>Weather in {WeatherInfo?.name}</h1>
      <p>Temperature: {WeatherInfo?.main.temp}°C</p>
      <p>Humidity: {WeatherInfo?.main.humidity}%</p>
      <p>Wind Speed: {WeatherInfo?.wind.speed} m/s</p>
      <p>Weather: {WeatherInfo?.weather[0].main}</p>
      <p>Weather-description: {WeatherInfo?.weather[0].description}</p>
      </>)}
    </div>
</section>
</>
  )
}

export default Weather