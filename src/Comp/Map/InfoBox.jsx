import React from 'react';

const InfoBox = () => {
    return(
        <div className = 'info-box'>
            <h2>Crime Data Information </h2>
            <ul>
                <li>ID: <strong>{info.offense_id}</strong></li>
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
                <li>CRIME: <strong>{info.name}</strong></li>
                <li>ID: <strong>{info.neighborhood}</strong></li>
                <li>ID: <strong>{info.npu}</strong></li>
                <li>ID: <strong>{info.lat}</strong></li>
                <li>ID: <strong>{info.lng}</strong></li>
            </ul>
        </div>

    )
}
export default InfoBox