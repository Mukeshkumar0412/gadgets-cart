import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoClock } from "react-icons/go"
import { BsGift } from "react-icons/bs"
import { PiCube } from "react-icons/pi"
import { FaArrowsRotate } from "react-icons/fa6"
import "../assets/Footer.css"

type Props = {}

export default function FeaturesGrid({ }: Props) {
  return (
    <div className='features-grid py-5'>
      <Container>
        <Row xs={1} sm={2} lg={4}>
          <Col className="feature-col">
            <div className="feature-card">
              <div className="icon-wrapper">
                <GoClock className='feature-icon' />
              </div>
              <h3 className='feature-title'>10 minute Free gadgets now</h3>
              <p className='feature-text'>Get your order delivered to your doorstep at the earliest from gadgets cart pickup stores near you.</p>
            </div>
          </Col>
          <Col className="feature-col">
            <div className="feature-card">
              <div className="icon-wrapper">
                <BsGift className='feature-icon' />
              </div>
              <h3 className='feature-title'>Best Prices & Offers</h3>
              <p className='feature-text'>Cheaper prices than your local electronic shop, great cashback offers to top it off. Get best prices & offers.</p>
            </div>
          </Col>
          <Col className="feature-col">
            <div className="feature-card">
              <div className="icon-wrapper">
                <PiCube className='feature-icon' />
              </div>
              <h3 className='feature-title'>Wide Assortment</h3>
              <p className='feature-text'>Choices from 5000+ products across gadgets, personal care, free services, 1-year warranties.</p>
            </div>
          </Col>
          <Col className="feature-col">
            <div className="feature-card">
              <div className="icon-wrapper">
                <FaArrowsRotate className='feature-icon' />
              </div>
              <h3 className='feature-title'>Easy Returns</h3>
              <p className='feature-text'>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked <span className="highlight-text">policy</span>.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}