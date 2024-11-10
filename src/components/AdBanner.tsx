import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import { assets } from '../assets'
import { url } from 'inspector'

type Props = {}

export default function AdBanner({ }: Props) {
    return (
        <div>
            <Container>

                <Row xs="2">
                    <Col >
                        <div style={{ backgroundImage: `url(${assets.adbanner})` }} className="adbanner-slide">
                            <div className="col-md-4">
                               
                                <h1>Electorincs & Moblies</h1>
                                <p> Get 30% offers</p>
                                <Button >Shop now</Button>
                            </div>
                            </div>



                    </Col>
                    <Col>
                    <div style={{ backgroundImage: `url(${assets.adbanner2})` }} className="adbanner-slide">
                            <div className="col-md-4">
                            <h1>Laptops & E-Products</h1>
                                <p> Get 20% offers</p>
                                <Button >Shop now</Button>
                            </div>
                            </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}