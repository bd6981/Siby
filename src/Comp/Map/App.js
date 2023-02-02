import Header from "../Header/Header";
// import GMap from "./GMap";
// import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// import Loader from './Loader';
// import React, { useState, useEffect } from "react";
// import { useMainContext } from "./Hooks/Hooks.js"
// import crimes from "../../data.json";

// const App = () => {




//   return (
//     <div className="HomePage">
//       <Header />
//       <GMap  />
//       <Nav />
//       <Footer />
//     </div>
//   );
// };

// export default App;
import GoogleMapReact from "google-map-react";
import { useState, useEffect, useRef } from "react";
import "./Map.css";
import React from "react";
import useSuperCluster from "use-supercluster";
import { useMainContext } from "./Hooks/Hooks";
import crimes from "../../data.json";
import { Icon } from "@iconify/react";
import robberIcon from "@iconify/icons-game-icons/robber";
import InfoBox from "./InfoBox";
import CrimeId from './CrimeId'
import peopleRobbery from "@iconify/icons-fa6-solid/people-robbery";

const Marker = ({ children }) => children;

export default function App({ center, eventData, lat, lng }) {
  const [zoom, setZoom] = useState(1);
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [infoBox, setInfoBox] = useState(null);
  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false);
  const [renderEvent, setRenderEvent] = useState([]);
  


 useEffect(() => {
   const fetchEvents = async () => {
     setLoading(true);
     const response = await fetch("./Map/Comp/data.json");
     if (response.ok) {
       const crimes = await response.json();
       
     }
     setEventData(crimes);
     setRenderEvent(crimes);
     setLoading(false);
   };

   fetchEvents(crimes, points, clusters);
 }, []);

  const points = crimes.map((crime) => ({
    type: "Feature",
    properties: {
      cluster: false,
      crimeId: crime.id,
      crimeTitle: crime.title,
      crimeDate: crime.date,
      crimeDay: crime.day,
      crimeTime: crime.time,
      crimeBeat: crime.beat,
      crimeZone: crime.zone,
      crimeLocation: crime.location,
      crimeIBR: crime.ibr,
      crimeOsDate: crime.osdate,
      crimeOsTime: crime.ostime,
      crimeNeighborhood: crime.neighborhood,
    },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(crime.longitude), parseFloat(crime.latitude)],
    },
  }));

  const { clusters, superCluster } = useSuperCluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

   
  return (
    <div>
      <Header/>
      <div className="map-main">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD2zMgWcSv5eO8fjUWF4b_hcbT6DPKc--A" }}
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
              bounds.nw.lat,
            ]);
          }}
          onClick={() => {
            setInfoBox(null);
          }}
          onDrag={() => {
            setInfoBox(null);
          }}>
          {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}>
                  <div
                    className="cluster-marker"
                    style={{
                      width: `${10 + (pointCount / points.length) * 20}px`,
                      height: `${10 + (pointCount / points.length) * 20}px`,
                    }}
                    onClick={() => {
                      //   const expansionZoom = Math.min(
                      //     superCluster.getClusterExpansionZoom(cluster.name)
                      //   );
                      //   mapRef.current.setZoom(expansionZoom);
                      // mapRef.current.panTo({ lat: latitude, lng: longitude });
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
                <button
                  className="crime-marker"
                  onClick={() => {
                    setInfoBox({
                      id: cluster.properties.crimeId,
                      title: cluster.properties.crimeTitle,
                      date: cluster.properties.crimeDate,
                      day: cluster.properties.crimeDay,
                      time: cluster.properties.crimeTime,
                      beat: cluster.properties.crimeBeat,
                      zone: cluster.properties.crimeZone,
                      location: cluster.properties.crimeLocation,
                      ibr: cluster.properties.crimeIBR,
                      osdate: cluster.properties.crimeOsDate,
                      ostime: cluster.properties.crimeOsTime,
                      neighborhood: cluster.properties.crimeNeighborhood,
                    });
                  }}>
                  <Icon icon={peopleRobbery} />
                </button>
              </Marker>
            );
          })}
        </GoogleMapReact>
        {infoBox && <InfoBox className="infoBox" info={infoBox}></InfoBox>}
      </div>
      <Footer/>
    </div>
  );
}

const defaultProps = {
  center: {
    lat: 33.716073,
    lng: -84.353217,
  },
  zoom: 11,
};
