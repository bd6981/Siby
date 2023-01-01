import React from 'react';

const InfoBox = () => {
    return(
        <div className = 'info-box'>
            <h2>Crime Data Information </h2>
            <ul>
                <li>ID: <strong>{info.offense_id}</strong></li>
                <li>ID: <strong>{info.rpt_date}</strong></li>
                <li>ID: <strong>{info.occur_date}</strong></li>
                <li>ID: <strong>{info.occur_day}</strong></li>
                <li>ID: <strong>{info.occur_day_num}</strong></li>
                <li>ID: <strong>{info.occur_time}</strong></li>
                <li>ID: <strong>{info.poss_date}</strong></li>
                <li>ID: <strong>{info.poss_time}</strong></li>
                <li>ID: <strong>{info.beat}</strong></li>
                <li>ID: <strong>{info.zone}</strong></li>
                <li>ID: <strong>{info.location}</strong></li>
                <li>ID: <strong>{info.ibr_code}</strong></li>
                <li>ID: <strong>{info.zone}</strong></li>
                <li>ID: <strong>{info.zone}</strong></li>
                <li>ID: <strong>{info.zone}</strong></li>
            </ul>
        </div>

    )
}
export default InfoBox