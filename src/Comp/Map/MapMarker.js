import React, {useState} from 'react'
import "../PNG/aa.png"
import "../PNG/bur.png"
import "../PNG/car.png"
import "../PNG/h.png"
import "../PNG/rob.png"
import "../PNG/theft.png"


const MapMarker = (lat, lng, onClick, title) => {
const [icon, setIcon] = useState(null)
    let renderIcon = null;
    if (title === "BURGLARY")
        renderIcon = "../PNG/bur.png";
    else if (title === "AUTO THEFT")
        renderIcon = "../PNG/car.png";
    else if (title === "HOMICIDE")
        renderIcon = "../PNG/h.png";
    else if (title === "LARCENY-NON VEHICLE")
        renderIcon = "../PNG/theft.png";
    else if (title === "LARCENY-FROM VEHICLE")
        renderIcon = "../PNG/car.png";
    else if (title === "ROBBERY")
        renderIcon = "../PNG/rob.png";
    else if (title === "AGG ASSAULT")
        renderIcon = "../PNG/aa.png";
    
  return (
    <div onClick={onClick}>
        <MapMarker icon={renderIcon} className="map-marker"/>
    </div>
  )
}

export default MapMarker