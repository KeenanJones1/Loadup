import React, {useState} from 'react'
import LocationButton from './LocationButton'
import WeatherCard from './WeatherCard'
require('dotenv').config()

var apiKey = process.env.REACT_APP_API_KEY;

function Container() {

 const [stateObject, setStateObject] = useState({
  coordinates: {}, 
  weather: {}
 })



 const setCoords = (lat, long) => {
  setStateObject({...stateObject, coordinates: {latitude: lat, longitude: long}})
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`)
  .then(resp => resp.json())
  .then(data => setStateObject({coordinates: {latitude: lat, longitude: long}, weather: data}))
 }

 console.log(stateObject);
 return (
  <div>
   {!stateObject.weather.main ? <LocationButton setCoords={setCoords}/>  : <WeatherCard weather={stateObject.weather}/>}
  </div>
 )
}

export default Container
