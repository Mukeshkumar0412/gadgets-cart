import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { assets } from '../assets'
import { url } from 'inspector'

type Props = {}

export default function AdBanner({ }: Props) {
    return (
        <div>
            <Container>
            
                <Row xs="2">
                    <Col >
                    <img className='bannerimg' src={require("../assets/images/nnn.jpg")}/>
                    

                    
                    </Col>
                    <Col>
                    <img className='bannerimg' src={require("../assets/images/yyy.jpg")}/>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}