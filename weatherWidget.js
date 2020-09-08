import React, {useContext} from 'react';
import {MyContext} from '../../App'
import fetchWeatherData from './scripts/fetchWeatherData';
import timeConverter from './scripts/timeConverter';

function WeatherWidget(){
  const ctx = useContext(MyContext);
  const weather = ctx.weather;
  function updateWeather(e){
    fetchWeatherData(e).then(data => ctx.setWeather({timezone: data.timezone, city: data.name, temp: data.main.temp, temp_min: data.main.temp_min, temp_max: data.main.temp_max, humidity: data.main.humidity, pressure: data.main.pressure, weather: data.weather[0].description, clouds: data.clouds.all, wind_speed: data.wind.speed, visibility: data.visibility, country: data.sys.country, sunrise: data.sys.sunrise, sunset: data.sys.sunset, icon: data.weather[0].icon}))
    console.log(ctx)
  }
  return(
    <div className="Weather-App">
      <form>
        <input id="inp-location" className="urlInput" style={{width: 300}}/>
        <button onClick={(e)=>updateWeather(e)} className="btn" style={{width: 100, fontSize: 20}}>Go</button>
      </form>
      <div id="info" className="none">
        <ul className="weather-block">
          <img src={"http://openweathermap.org/img/wn/"+weather.icon+"@2x.png"} alt="icon" style={{width: 100, height: 100}}/>
          <div><strong>City:</strong>   {weather.city} </div>
          <div><strong>Temperature:  </strong>   {weather.temp} °C</div>
          <div><strong>Maximum Temperature:  </strong>   {weather.temp_max} °C</div>
          <div><strong>Minimum Temperature:  </strong>   {weather.temp_min} °C</div>
          <div><strong>Humidity:  </strong>   {weather.humidity}%</div>
          <div><strong>Pressure:  </strong>   {weather.pressure}</div>
        </ul>
        <ul className="weather-block">
          <div><strong>Weather:  </strong>   {weather.weather}</div>
          <div><strong>Clouds:  </strong>   {weather.clouds}/100</div>
          <div><strong>Wind Speed:  </strong>   {weather.wind_speed} m/s</div>
          <div><strong>Visibility:  </strong>   {weather.visibility} m</div>
        </ul>
        <ul className="weather-block">
          <div><strong>Country:  </strong>   {weather.country}</div>
          <div><strong>Sunrise Time:  </strong>   {timeConverter(weather.sunrise, weather.timezone)}</div>
          <div><strong>Sunset Time:  </strong>   {timeConverter(weather.sunset, weather.timezone)}</div>
        </ul>
      </div>
    </div>
  )
}
export default WeatherWidget;
