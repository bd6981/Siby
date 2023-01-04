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
import  InfoBox  from './InfoBox';




export default function GMap({ center, eventData, lat, lng }) {
  
 
  const [zoom, setZoom] = useState(1);
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null)
  const [infoBox, setInfoBox] = useState(null)

  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false)
  const [renderEvent, setRenderEvent] = useState([])
  const Marker = ({ children }) => children;
  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

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
   
    
      

  }, [])

  const points = crimes.map(crime => ({
    "type": "Feature",
    "properties": {
      "cluster": false,
      "crimeId": crime.id,
      "crimeTitle": crime.title,
      "crimeDate": crime.date,
      "crimeDay": crime.day,
      "crimeTime": crime.time,
      "crimeBeat": crime.beat,
      "crimeZone": crime.zone,
      "crimeLocation": crime.location,
      "crimeIBR": crime.ibr,
      "crimeOsDate": crime.osdate,
      "crimeOsTime": crime.ostime,
      "crimeNeighborhood": crime.neighborhood,
     
    },
    geometry: { type: "Point", coordinates: [parseFloat(crime.longitude), parseFloat(crime.latitude)] }
  }))
  const { clusters, superCluster } = useSuperCluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  })


  
  return (
    <div className='map-main' >
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
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
          ]);
        }}
        onClick={() => {setInfoBox(null)}}
        onDrag={() => {setInfoBox(null)}}
        
       
        >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;
         
          
          if (isCluster) {
            return (
              <Marker key={`cluster-${cluster.id}`} lat={latitude} lng={longitude}>
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      superCluster.getClusterExpansionZoom(cluster.name),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}>
                  {pointCount}
                </div>
              </Marker>
            
            );
          }
          return (
            <Marker
              key={`crime-${cluster.properties.crimeId}`}
              lat={latitude}
              lng={longitude}>
              <button className="crime-marker" 
              onClick = {() => {
                setInfoBox({id: cluster.properties.crimeId, title: cluster.properties.crimeTitle, date: cluster.properties.crimeDate, day: cluster.properties.crimeDay, time: cluster.properties.crimeTime, beat: cluster.properties.crimeBeat, zone: cluster.properties.crimeZone, location: cluster.properties.crimeLocation, ibr: cluster.properties.crimeIBR, osdate: cluster.properties.crimeOsDate , ostime: cluster.properties.crimeOsTime , neighborhood: cluster.properties.crimeNeighborhood , })
              }}>
                <Icon icon={robberIcon} alt="crime isnt good" ></Icon>
              </button>
            </Marker>
          );
        })}
        

      </GoogleMapReact>
      {infoBox && <InfoBox className="infoBox" info={infoBox} ></InfoBox>}
     
        
    </div>
  )

      }    
    
  const defaultProps = {
    center: {
      lat: 33.716073, 
      lng: -84.353217
    },
    zoom: 11
  };
