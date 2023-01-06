import React from "react";
import "../Header/Header.css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item2">
    
          <a href="http://github.com/bd6981" className="item1">
            <BsGithub size="20px" />
          </a>

          <a
            href="http://www.linkedin.com/in/brittany~davis/"
           
            className="item1">
            <AiOutlineLinkedin size="20px" />
          </a>

        </div>
      </div>
    </footer>
  );
};
export default Footer;
