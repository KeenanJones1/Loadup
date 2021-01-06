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
  console.log("lat", lat, "long", long)
  setStateObject({...stateObject, coordinates: { latitude: lat, longitude: long}})
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
  .then(resp => resp.json())
  .then(data => console.log(data))
 }

 return (
  <div>
   {!stateObject.weather.temp ? <LocationButton setCoords={setCoords}/>  : <WeatherCard />}
  </div>
 )
}

export default Container
