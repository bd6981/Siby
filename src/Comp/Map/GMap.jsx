import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'
import {useState, useEffect, useRef} from 'react';
import './Map.css';
import styled from "styled-components";
import { Icon } from '@iconify/react';
import './Map.css';
import crimeData from '../../Data.json';
import React from "react";
import useSuperCluster from 'use-supercluster'

export default function GMap({ center, data, eventData, lat, lng }) {
  const [zoom, setZoom] = useState(1);
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null)
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [data, setData] = useState([]);
  // const [date, setDate] = useState("");
  // const [searchParam] = useState(["occur_date"]);
  // const [filterParam, setFilterParam] = useState(["All"]);
  // const [currentDate, setNewDate] = useState(null);

  // const onChange = (e, data) => setNewDate(data.value);



  const eventDataIndex = {
    "ROBBERY": "Robbery",
    "AGG ASSAULT" : "Aggrivated Assault",
    "AUTO THEFT": "Auto theft",
    "BURGLARY" : "Burgulary",
    "LARCENY-FROM VEHICLE" : "Larceny-From Vehicle",
    "LARCENY-NON VEHICLE" : "Larceny-Non Vehicle"
    
    


  }
  let eventDataIndexNum = Object.keys(eventDataIndex);
  eventDataIndexNum = eventDataIndexNum.map(index => Number(index));
  const points = eventData.map(event => ({
    "type": "Feature",
    "properties": {
      "cluster": false,
      "eventKey": data.name
    },
    "geometry": [data.lat, data.lng] 
  }))
  const { clusters, superClusters } = useSuperCluster({
    points,
    bounds,
    zoom,
    options: {radius: 75, maxZoom: 20}
  })


  
  return(
    <div className='map-main' style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaVj27ZcB7X34rvYWlr1kPFiBkUKTNO0o" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ])
        }}> 
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.data
          const { cluster: isCluster, point_count: pointCount } = cluster.properties;
          const clusterId = cluster.properties.eventType;
            if(isCluster){
            let changeSize = Math.round(pointCount / points.length * 100);
              let addSize = Math.min(changeSize * 10, 40)
              return (
                <section lat={latitude} lng={longitude} key={cluster.id}>
              
                    <div className='map-cluster' style={{
                      width: addSize + changeSize + "px",
                      height: addSize + changeSize + "px"
                    }}>{pointCount}
                  </div>
                    
                </section>
              )
            }
        })}
      </GoogleMapReact>
    </div>
                

    // </div>
  )
}
  const defaultProps = {
    center: {
      lat: 33.716073, 
      lng: -84.353217
    },
    zoom: 10
  };
