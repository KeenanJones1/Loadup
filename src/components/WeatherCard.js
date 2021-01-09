import React from 'react'
import styled from 'styled-components'
import cloud from '../weatherPics/cloudy.jpg'
import snow from '../weatherPics/snow.jpg'
import rain from '../weatherPics/rain.jpg'
import sunny from '../weatherPics/sunny.jpg'

function WeatherCard(props) {

 const dynamicIcon = () => {
  if(keywordSearch(props.weather.weather[0].main, 'cloud')){
   return cloud;
 }
 else if(keywordSearch(props.weather.weather[0].main, 'rain')){
   return rain
 }
 else if(keywordSearch(props.weather.weather[0].main, 'sunny')){
  return sunny
}
 else if(keywordSearch(props.weather.weather[0].main, 'snow')){
  return snow
}
else{
 return cloud;
}
 }

 const keywordSearch = (weather, icon) => {
  let newWeather = weather.replace(/\s/g, '').toLowerCase()
  return newWeather.includes(icon)
 }

const celConversion = (temp) => {
 temp = Math.floor((temp - 32) * 5/9)
 return temp
}

 return (
  <CardWrapper>
   <Card className="container">
    <h3 className="row">{`${props.weather.name}, ${props.weather.sys.country}`}</h3>
    <h1 className="row">{Math.floor(props.weather.main.temp)}°F /{celConversion(Math.floor(props.weather.main.temp))}°C</h1>
    <img src={dynamicIcon()} alt="" width="200" height="250"/>

    <p>Feels like {Math.floor(props.weather.main.feels_like)}°F / {celConversion(Math.floor(props.weather.main.feels_like))}°C</p>

    <p className="row">Hi {Math.floor(props.weather.main.temp_max)}°F / {celConversion(Math.floor(props.weather.main.temp_max))}°C</p>

    <p className="row">Low {Math.floor(props.weather.main.temp_min)}°F / {celConversion(Math.floor(props.weather.main.temp_min))}°C</p>
   </Card>
  </CardWrapper>
 )
}

const CardWrapper = styled.div`
  border: 2px solid palevioletred;
  height: 100vh;
  width: 100vw;
  position: relative;
  background: linear-gradient(to bottom, #0066ff 0%, #ff99cc 100%);

`

const Card = styled.div`
 border: 2px solid blue;
 position: relative;
    left: 50%;
    bottom: -20%;
    transform: translateX(-50%);
    border: 1px solid red;
    border-radius: 3px;
    overflow: hidden;
    height: 30rem;
    width: 32rem;
    background-color: white;
    border: 1px solid rgb(134, 134, 134);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, .3);
    transition: all .1s;

    &__content {
        position: relative;
        text-align: center;
        height: 25rem;
        width: 100%;
        

        &--pictue {
            position: relative;
            display: block;
            background-size: cover;
            height: 70%;
            top: 0;
        }

        &--header {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
        }
    }
  
  &:hover {
    transform: translate(-50%, -.5rem) scale(1.03);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, .6);
  }
`

export default WeatherCard
