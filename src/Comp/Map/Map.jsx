import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import markers from '../../crimeData.json'

const containerStyle = {
  width: '98.3vw',
  height: '70vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  placeItems: 'center',
  border: '1px solid black',

};
//Atlanta GA
const center = {
  lat: 33.753746,
  lng: -84.386330
};

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAPntdW_JA88-CRNwjhbR2d6Pr3e8f74II"
  })

  const [aMap, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(aMap) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(aMap)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])






  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap)
