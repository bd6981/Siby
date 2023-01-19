import React from 'react'
import './Header.css'
import myImage from '../Auth/img1.png'
import {

 
  Image,

} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Image
          src={myImage}
          style={{ height: "13vh", width: "100vw", textAlign: "center" }}
        />
      </header>
    </div>
  );
}
export default Header
