
import React from 'react'
import { Icon } from '@iconify/react';
import peopleRobbery from '@iconify/icons-fa6-solid/people-robbery';
import InfoBox from './InfoBox';


function CrimeId ({lat, lng, onClick, title}){
    let showIcon = null;
    if (title === 'LARCENY-FROM VEHICLE')
        showIcon = peopleRobbery;  
  return (
    <div onClick = {InfoBox}>
          <Icon icon={showIcon} className= "Marker"/>
    </div>
  )
}

export default CrimeId
