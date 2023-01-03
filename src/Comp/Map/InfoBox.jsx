import React, {useState} from 'react';

import './Map.css'



const InfoBox = ({info}) => {
   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className="infoBox">
          <header>Crime Info</header>
        
        <div>
            <ul>
            <li>CRIME: <strong>{info.title}</strong></li>
            <li>ID: <strong>{info.id}</strong></li>
            
            <li>DATE: <strong>{info.date}</strong></li>
            <li>OCCURED ON A: <strong>{info.day}</strong></li>
            
            <li>TIME: <strong>{info.time}</strong></li>
            <li>ON SCENE DATE: <strong>{info.osdate}</strong></li>
            <li>ON SCENE TIME: <strong>{info.ostime}</strong></li>
            <li>BEAT: <strong>{info.beat}</strong></li>
            <li>ZONE: <strong>{info.zone}</strong></li>
            <li>LOCATION: <strong>{info.location}</strong></li>
            <li>IBR CODE: <strong>{info.ibr}</strong></li>
            
            <li>NEIGHBORHOOD: <strong>{info.neighborhood}</strong></li>
            

            </ul>
        </div>
        <footer>
         
          <button variant="primary" onClick={handleClose}>
            Close
          </button>
        </footer>
      </div>
    </>        

    )
}
export default InfoBox