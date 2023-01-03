import React from 'react'
import "../../aa.png"
import "../../bur.png"
import "../../car.png"
import "../../h.png"
import "../../rob.png"
import "../../theft.png"


const MapMarker = (lat, lng, onClick, name) => {
    let renderIcon = null;
    if (title === "BURGLARY")
        renderIcon = robberIcon;
    else if (title === "AUTO THEFT")
        renderIcon = keyCard;
    else if (title === "HOMICIDE")
        renderIcon = crimeSceneTape;
        else if (title === "HOMICIDE")
        renderIcon = crimeSceneTape;
        else if (title === "HOMICIDE")
        renderIcon = crimeSceneTape;
        else if (title === "HOMICIDE")
        renderIcon = crimeSceneTape;
    
  return (
      <div onClick={onClick}>
          <Icon icon={renderIcon} className="map-marker"/>
         </div>
  )
}

export default MapMarker