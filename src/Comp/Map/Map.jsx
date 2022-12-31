import GoogleMapReact from 'google-map-react'
import React from 'react'
import MapMarkers from './MapMarkers'
import './Map.css'

const Map = ({center, zoom}) => {
  return (
    <div className='map'>
      <GoogleMapReact 
    
        bootstrapURLKeys={{ key: "AIzaSyAGcPnmYBTNNtOI2fr5C8O_rLM43tZhjUI" }}
        defaultZoom={zoom}
        defaultCenter={center}
        defaultZoomControl={true}>
        <MapMarkers lat={center.lat} lng={center.lng}></MapMarkers>
      </GoogleMapReact>
    </div>
  )
}
  Map.defaultProps = {
    center: {
      lat: 33.716073,
      lng: -84.353217,
    },
    zoom: 6
  }

export default Map
