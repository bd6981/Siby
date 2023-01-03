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
            <li>REPORTED DATE: <strong>{info.rpt_date}</strong></li>
            <li>OCCURANCE DATE: <strong>{info.occur_date}</strong></li>
            <li>OCCURED ON: <strong>{info.occur_day}</strong></li>
            <li>DAY NUM: <strong>{info.occur_day_num}</strong></li>
            <li>OCCURANCE TIME: <strong>{info.occur_time}</strong></li>
            <li>POSS DATE: <strong>{info.poss_date}</strong></li>
            <li>POSS TIME: <strong>{info.poss_time}</strong></li>
            <li>BEAT: <strong>{info.beat}</strong></li>
            <li>ZONE: <strong>{info.zone}</strong></li>
            <li>LOCATION: <strong>{info.location}</strong></li>
            <li>IBR CODE: <strong>{info.ibr_code}</strong></li>
            <li>CRIME: <strong>{info.title}</strong></li>
            <li>NEIGHBORHOOD: <strong>{info.neighborhood}</strong></li>
            <li>NPU: <strong>{info.npu}</strong></li>
            <li>LATITUDE: <strong>{info.latitude}</strong></li>
            <li>LONGITUDE: <strong>{info.longitude}</strong></li>
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