import React from 'react'
import { Container } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { assets } from '../assets';


type Props = {}

export default function

    ({ }: Props) {
    return (
        <Container>
            <div className='footer-bar '>

                <h3 className='fs-6 mt-4'><b>Payment Partners</b></h3>
                <img className='pay-img' src={require('../assets/images/paytm.png')} />
                <img className='pay-img' src={require('../assets/images/Gpay.png')} />
                <img className='pay-img' src={require('../assets/images/creditcard.png')} />
                <img className='pay-img' src={require('../assets/images/visa.png')} />
                <img className='pay-img' src={require('../assets/images/amazon.png')} />
                <h3 className='mmm'>Get Deliveries with Gadgets-cart</h3>
                <img style={{ backgroundImage: `url(${assets.foot1})` }} className="lowbanner-slide">
                </img>
                <img style={{ backgroundImage: `url(${assets.foot2})` }} className="lowbanner-slide">
                </img>
 
                </div>
        </Container>
    )
}