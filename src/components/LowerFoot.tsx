import React from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import "../assets/Footer.css"

type Props = {}

export default function LowerFoot({ }: Props) {
    return (
        <div className="lower-foot-wrapper">
            <Container>
                <div className='lowerfoot'>
                    <div className="copyright-text">
                        &copy;2024 <b>UI developer.</b> Copyright &copy;DEV. All rights reserved worldwide.
                    </div>
                    <div className="footer-icons">
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FiYoutube /></a>
                        <a href="#" className="social-icon"><AiOutlineFacebook /></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}