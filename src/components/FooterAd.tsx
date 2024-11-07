import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoClock } from "react-icons/go";
import { BsGift } from "react-icons/bs";
import { PiCube } from "react-icons/pi";
import { FaArrowsRotate } from "react-icons/fa6";
type Props = {}

export default function
  ({ }: Props) {
  return (
    <div className='py-5'>
      <Container>
        <Row xs="4">
          <Col className="bg-light">
            <div className="ad-name">
              <GoClock className='icons-main'/>
              <h2 className='font-head'>10 minute Free gadgets now</h2>
              <p className='para'>Get your order devlivered to you doorstep at the earilest from gadgets cart pickup stores near you.</p>

            </div>
          </Col>
          <Col className="bg-light ">
            <div className="ad-name">
              <BsGift className='icons-main'/>
              <h2 className='font-head'>Best Prices & Offers</h2>
              <p className='para'>cheaper prices then your local electronic shop,great cashback offers to top it off, Get best pricess & offers</p>

            </div>
          </Col>
          <Col className="bg-light ">
            <div className="ad-name">
              <PiCube className='icons-main' />
              <h2 className='font-head'>Wide Assortment</h2>
              <p className='para'>Choices from 5000+ products across gadgets,personal care,free services ,1-years warrentys.</p>

            </div>
          </Col>
          <Col className="bg-light">
            <div className="ad-name">
              <FaArrowsRotate className='icons-main' />
              <h2 className='font-head'>Easy Returns</h2>
              <p className='para'>Not satisfed with a product? Return it at the doorstep & get a refund within hours. No questions asked <span className="text-danger">Policy</span>.</p>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
