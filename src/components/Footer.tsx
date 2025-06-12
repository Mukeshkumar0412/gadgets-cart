import React from 'react'
import { Container } from 'react-bootstrap'
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"
import { AiOutlineFacebook } from "react-icons/ai"
import { assets } from '../assets'
import "../assets/Footer.css"

type Props = {}

export default function Footer({ }: Props) {
  return (
    <Container>
      <div className='footer-container'>
        <div className="payment-partners">
          <h3 className="section-title">Payment Partners</h3>
          <div className="payment-icons">
            <img className='pay-img' src={require('../assets/images/paytm.png')} alt="Paytm" />
            <img className='pay-img' src={require('../assets/images/Gpay.png')} alt="Google Pay" />
            <img className='pay-img' src={require('../assets/images/creditcard.png')} alt="Credit Card" />
            <img className='pay-img' src={require('../assets/images/visa.png')} alt="Visa" />
            <img className='pay-img' src={require('../assets/images/amazon.png')} alt="Amazon Pay" />
          </div>
        </div>

        <div className="delivery-banner">
          <h3 className="delivery-title">Get Deliveries with Gadgets-cart</h3>
          <div className="banner-images">
            <div className="banner-slide" style={{ backgroundImage: `url(${assets.foot1})` }}></div>
            <div className="banner-slide" style={{ backgroundImage: `url(${assets.foot2})` }}></div>
          </div>
        </div>

        <div className="social-media">
          <h3 className="section-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
            <a href="#" aria-label="YouTube"><FiYoutube className="social-icon" /></a>
            <a href="#" aria-label="Facebook"><AiOutlineFacebook className="social-icon" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
          </div>
        </div>
      </div>
    </Container>
  )
}