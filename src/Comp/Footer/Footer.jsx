import React from 'react'
import "../Header/Header.css";
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";
import {AiOutlineLinkedin} from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='item2'>
                    <p>Created by: Brittany Davis</p>
                    <a href='http://github.com/bd6981'
                    target='_blank'
                    className='item1'><GoMarkGithub/></a>
                    <a href='http://www.linkedin.com/in/brittany~davis/'
                    target='_blank'
                    className='item1'><AiOutlineLinkedin/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer