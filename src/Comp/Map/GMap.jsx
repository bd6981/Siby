import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'
import {useState, useEffect, useRef} from 'react';
import './Map.css';
import React from "react";
import useSuperCluster from 'use-supercluster'
import { useMainContext } from '../Map/Hooks/Hooks'
import crimes from '../../Data.json';
import { Icon } from '@iconify/react';
import robberIcon from '@iconify/icons-game-icons/robber';


export default function GMap({ center, eventData, lat, lng }) {
  const [zoom, setZoom] = useState(1);
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null)

    const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false)
  const [renderEvent, setRenderEvent] = useState([])
  const Marker = ({ children }) => children;


  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const response = await fetch("../../Data.json");
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const crimes = await response.json()
      setEventData(crimes)
      setRenderEvent(crimes)
      setLoading(false)
    }
    fetchEvents(crimes);
    console.log(crimes)
    
      

       },[])

  // const eventDataIndex = {
  //   "ROBBERY": "Robbery",
  //   "AGG ASSAULT" : "Aggrivated Assault",
  //   "AUTO THEFT": "Auto theft",
  //   "BURGLARY" : "Burgulary",
  //   "LARCENY-FROM VEHICLE" : "Larceny-From Vehicle",
  //   "LARCENY-NON VEHICLE" : "Larceny-Non Vehicle"
  // }
  // let eventDataIndexNum = Object.keys(eventDataIndex);
  // eventDataIndexNum = eventDataIndexNum.map(index => Number(index));
  const points = eventData.map(event => ({
    "type": "Feature",
    "properties": {
      "cluster": false,
      "eventKey": crimes.name
    },
  
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
        defaultZoom={defaultProps.zoom}>
        {crimes.map(crime => (
          <Marker
            key={crime.name}
            lat={crime.Lat}
            lng={crime.Lng}><Icon icon={robberIcon} alt="crime isnt good"/>
        </Marker>
        ))}
        

        </GoogleMapReact>
        {/* // yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map }) => { */}
        {/* //   mapRef.current = map;
        // }}
        // onChange={({ zoom, bounds }) => { */}
      
{/* 
        //   setZoom(zoom);
        //   setBounds([
        //     bounds.nw.lng,
        //     bounds.se.lat,
        //     bounds.se.lng,
        //     bounds.nw.lat
        //   ])
        // }}>
        // {clusters.map(cluster => { */}
          

        {/* //   const [longitude, latitude] = cluster.event
        //   const { cluster: isCluster, point_count: pointCount } = cluster.properties;
        //   const clusterId = cluster.properties.eventType;
        //     if(isCluster){ */}
        {/* //     let changeSize = Math.round(pointCount / points.length * 100);
        //       let addSize = Math.min(changeSize * 10, 40)
        //       return (
        //         <section lat={latitude} lng={longitude} key={cluster.id}>
              
        //             <div className='map-cluster' style={{ */}
        {/* //               width: addSize + changeSize + "px",
        //               height: addSize + changeSize + "px"
        //             }}>{pointCount}
              //     </div> */}
                    
              {/* //   </section> */}
              {/* // )
        //     }
        // })} */}
      {/* </GoogleMapReact> */}
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
