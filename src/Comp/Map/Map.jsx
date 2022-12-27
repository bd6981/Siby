import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAPntdW_JA88-CRNwjhbR2d6Pr3e8f74II"
  })



  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
