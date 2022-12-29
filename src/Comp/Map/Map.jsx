import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

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

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAPntdW_JA88-CRNwjhbR2d6Pr3e8f74II"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
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

export default React.memo(MyComponent)
// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


// function Map () {

//   return (
//     <div>
//       <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC57S8rETWEbl5rE6xGzQg5atyMqMTHsLY&&q=Eiffel+Tower,Paris+France"
//         width="450"
//         height="250"
//         frameborder="0"
//         referrerpolicy="no-referrer-when-downgrade">
//       </iframe>
//     </div>
//   ) 
     
// }


// export default Map