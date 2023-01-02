import React from 'react'
import { Icon } from '@iconify/react';
import robberIcon from '@iconify/icons-game-icons/robber';
import keyCard from '@iconify/icons-game-icons/key-card';
import crimeSceneTape from '@iconify/icons-game-icons/crime-scene-tape';


const MapMarker = (lat, lng, onClick, name) => {
    let renderIcon = null;
    if (name === "BURGLARY")
        renderIcon = robberIcon;
    else if (name === "AUTO THEFT")
        renderIcon = keyCard;
    else if (name === "HOMICIDE")
        renderIcon = crimeSceneTape;
    
  return (
      <div onClick={onClick}>
          <Icon icon={renderIcon} className="map-marker"/>
         </div>
  )
}

export default MapMarker