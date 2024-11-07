import React from 'react'
import { Container } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";


type Props = {}

export default function

    ({ }: Props) {
    return (
        <Container>
            <div className='footer-bar'>
               
                <div className='lowerfoot'>
                    &copy;2024 <b>UI developer.</b> Copyright &copy;DEV.All rights reserved worldwide.
                </div>
                
                <div className="footer-icon">
                <FaInstagram /><FiYoutube /><AiOutlineFacebook />
                </div>
            </div>
        </Container>
    )
}