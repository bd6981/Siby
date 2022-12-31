// import markers from '../../crimeData.json'
// import React, { useState } from 'react'
// import { GiPositionMarker } from 'react-icons/gi'

// export default function MapMarker(color, z, size) {
    
//     const [marker, setMarker] = useState(markers)

 
   
//     return (
//         <div>
       
//             <div
                
//                 onClick={() => { setMarker(marker) }}
//             >
                 
               
//                 <div className='pin'>
//                     <GiPositionMarker
//                         icon={'mdi:map-marker'}
//                         className='markr'
//                         onClick={() => { setMarker(marker) }}
                        
//                         style={{ position: 'relative', color: `rgb(${color})`, zIndex: `${z}`, fontSize: `${size}` }}
//                     />
                
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react'
import { Icon } from '@iconify/react'
import './Map.css'



const MapMarkers = ({lat, lng, onClick}) => {
  return (
      <div className='mapMarker' onClick={onClick}>
          <Icon icon="uil:map-marker" className='locateIcon'/>
      
    </div>
  )
}

export default MapMarkers
