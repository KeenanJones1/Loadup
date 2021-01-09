import React, {useState} from 'react'
import styled from 'styled-components';
import Loading from './Loading'

function LocationButton(props) {
  const [loading, setLoading] = useState(false)

  const findme = () => {
    let success = (position) => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      props.setCoords(latitude, longitude)
      setLoading(false)
    }

    let error = () => {
      console.log('Unable to retrieve your location') 
    }

    if(!navigator.geolocation){
      console.log('Geolocation is not supported by your browser');
    }else{
      navigator.geolocation.getCurrentPosition(success, error);
      setLoading(true)
    }
  }

  return (
    <div>
      { !loading ? <Button onClick={() => findme()}>
        Current Weather
      </Button> : <Loading/>}
    </div>
  )
}


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width:30rem;
  height: 5rem;
  background-color: #FF3108;
`

export default LocationButton





