import React, {useState} from 'react'
import LocationButton from './LocationButton'
import WeatherCard from './WeatherCard'

function Container() {

 const [stateObject, setStateObject] = useState({
  coordinates: {}, 
  weather: {}
 })

 const fetchWeather = () => {
  

 }

 const setCoords = (lat, long) => {
  setStateObject({...stateObject, coordinates: { latitude: lat, longitude: long}})
  fetchWeather()
 }


console.log(stateObject);
 return (
  <div>
   {!stateObject.weather.temp ? <LocationButton setCoords={setCoords}/>  : <WeatherCard />}
  </div>
 )
}

export default Container
