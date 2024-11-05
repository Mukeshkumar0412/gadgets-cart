import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function TestApiComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/products', {
            store: "gadget"
        }).then(res => {
            setData(res.data.data)
        })
        // fetch('https://ecom-shop-api.vercel.app/products', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         store: "gadget"
        //     })
        // })
    }, [])

    return (
        <Container>
            <Row>
                {
                    data.length ?
                        data.map((item: any) => (
                            <Col md={4} key={item.id}>
                                <Card>
                                    <img
                                        alt="Sample"
                                        src={item.image.thumbnail}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        : null
                }
            </Row>
        </Container>
    )
}
