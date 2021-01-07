import React from 'react'
import styled from 'styled-components';

function LocationButton(props) {

  const findme = () => {
    let success = (position) => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      props.setCoords(latitude, longitude)
    }

    let error = () => {
      console.log('Unable to retrieve your location') 
    }

    if(!navigator.geolocation){
      console.log('Geolocation is not supported by your browser');
    }else{
      navigator.geolocation.getCurrentPosition(success, error);
      console.log("....Loading")
    }
  }

  return (
    <div>
      <Button onClick={() => findme()}>
        Current Weather
      </Button>
    </div>
  )
}


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default LocationButton



// const LocationButton = () => {
  
//   const findme = () => {
//     let success = (position) => {
//       const latitude  = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`)
//     }

    // let error = () => {
    //   console.log('Unable to retrieve your location') 
    // }

    // if(!navigator.geolocation){
    //   console.log('Geolocation is not supported by your browser');
    // }else{
    //   navigator.geolocation.getCurrentPosition(success, error);
    //   // console.log(navigator.geolocation.getCurrentPosition(success, error))
    // }
//   }

//  return (
//    <Button onClick={() => findme()}>
//     Push me
//    </Button>
//  )
// }



// export default LocationButton


