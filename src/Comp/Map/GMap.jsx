import GoogleMapReact from 'google-map-react';
import React,{useState, useEffect} from 'react';
import './Map.css';
import styled from "styled-components";
import { Icon } from '@iconify/react';
import './Map.css';
import crimeData from '../../crimeData.json';
import InfoBox from './InfoBox'

 const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;


function Marker ({ children }) {
  return <Icon>{children}</Icon>;
}


  
export default function GMap() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("")
  const [searchParam] = useState(["occur_date"])
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("crimeData.json"
      , {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json'

        }
      }
    )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setData(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
  }, []);

    
    
  const [icons, setIcons] = useState(crimeData);
  const [infoBox, setInfoBox] = useState(null)
   
  const show = (name) => {
    setIcons(crimeData.filter((item) => item.name === name))
  };
  
    

  return (
    <>
  
      <MapContainer>
        <GoogleMapReact bootstrapURLKeys={{ key: process.env.MY_API_KEY }}
          zoom={10} center={[33.716073, -84.353217]}>
          
          {icons.map((crime => (
            <Icon icon="uil:map-marker" className='locateIcon'
              key={crime.id}
              lat={crime.lat}
              lng={crime.lng}
              onClick = {setInfoBox}>
             
            
              {/* {crime.name} */}
            </Icon>
          )))} 
        </GoogleMapReact>
        {infoBox && <InfoBox info={infoBox} /> }
      </MapContainer>
    </>
  );
}
