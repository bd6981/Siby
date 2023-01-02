import GoogleMapReact from 'google-map-react';
import {useState, useEffect} from 'react';
import './Map.css';
import styled from "styled-components";
import { Icon } from '@iconify/react';
import './Map.css';
import crimeData from '../../crimeData.json';
import React from "react";
import SemanticDatepicker  from 'react-semantic-ui-datepickers'

const AnyReactComponent = ({ text }) => <div>{text}</div>;



export default function GMap() {
  const defaultProps = {
    center: {
      lat: 33.716073, 
      lng: -84.353217
    },
    zoom: 11
  };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [searchParam] = useState(["occur_date"]);
  const [filterParam, setFilterParam] = useState(["All"]);
   const [currentDate, setNewDate] = useState(null);

  const onChange = (e, data) => setNewDate(data.value);


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
            setIsLoaded(false);
            setData(result);
          },
          (error) => {
            setIsLoaded(false);
            setError(error);
          }
    )

  }, []);  
  

  function search(data) {
        return data.filter((crime) => {
            if (crime.occur_date == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        crime[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(date.toLowerCase()) > -1
                    );
                });
            // } else if (filterParam == "All") {
            //     return searchParam.some((newItem) => {
            //         return (
            //             crime[newItem]
            //                 .toString()
            //                 .toLowerCase()
            //                 .indexOf(date.toLowerCase()) > -1
            //         );
            //     });
            }
        });
    }

  
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input>
            <SemanticDatepicker 
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={date}
              onChange={(e) => setData(e.target.value)}
              // onChange = (event, data) => setNewDate(data.value);
            /></input>
          </label>
        </div>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MY_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
           
              {search(data).map((crime) => (
              
              <Icon icon="uil:map-marker" className='locateIcon'
                key={crime.id}
                lat={crime.lat}
                lng={crime.lng}>
              </Icon>
            ))}
             
          </GoogleMapReact>
        </div>
                

      </div>
    )
  }

