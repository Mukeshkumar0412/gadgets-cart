import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function ProductComponent() {
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
        <Container className="mt-5">
            <h3 className="py-2">Popular Products</h3>
            <Row>
                {
                    data.length ?
                        data.map((item: any) => (
                            <Col md={4} key={item.id} className="product">
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
                                            {/* {item.banners} */}
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
