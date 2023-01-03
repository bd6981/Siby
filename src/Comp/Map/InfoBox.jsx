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
            <p>CRIME: <strong>{info.title}</strong></p>
            <p>ID: <strong>{info.id}</strong></p>
            
            <p>DATE: <strong>{info.date}</strong></p>
            <p>OCCURED ON A: <strong>{info.day}</strong></p>
            
            <p>TIME: <strong>{info.time}</strong></p>
            <p>ON SCENE DATE: <strong>{info.osdate}</strong></p>
            <p>ON SCENE TIME: <strong>{info.ostime}</strong></p>
            <p>BEAT: <strong>{info.beat}</strong></p>
            <p>ZONE: <strong>{info.zone}</strong></p>
            <p>LOCATION: <strong>{info.location}</strong></p>
            <p>IBR CODE: <strong>{info.ibr}</strong></p>
            
            <p>NEIGHBORHOOD: <strong>{info.neighborhood}</strong></p>
            

            </ul>
        </div>
        <footer>
         
          <button variant="primary" onCpck={handleClose}>
            Close
          </button>
        </footer>
      </div>
    </>        

    )
}
export default InfoBox