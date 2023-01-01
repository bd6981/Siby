import GoogleMapReact from 'google-map-react';
import React,{useState, useEffect} from 'react';
import './Map.css';
import styled from "styled-components";
import { Icon } from '@iconify/react';
import './Map.css';
import crimeData from '../../crimeData.json';

 const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
// const Wrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background-color: #000;
//   border: 2px solid #fff;
//   border-radius: 100%;
//   user-select: none;
//   color: #fff;
//   transform: translate(-50%, -50%);
//   &:hover {
//     z-index: 1;
//   }
// `;
// import '../../crimeData.json'

function Marker({ children }) {
  return <Icon>{children}</Icon>;
}
export default function GMap() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('crimeData.json'
    ,{
      header:{
        Accept: 'application/json',
        'Content-Type': 'application/json'

      }
    }
    )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }
  useEffect(() => {
    getData()
    
    },[])
  const [icons, setIcons] = useState(crimeData);
  const show = (name) => {
    setIcons(crimeData.filter((item) => item.name === name));
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
              lng={crime.lng}>
            
              {/* {crime.name} */}
            </Icon>
          )))} 
        </GoogleMapReact>
      </MapContainer>
    </>
  );
}
