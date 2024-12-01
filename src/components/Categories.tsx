import React, { useState, useEffect } from 'react';
import { Card, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Categories() {
    const [data, setProducts] = useState([]);

    const categoryImages: Record<string, string> = {
        "accessories": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2170/conversions/accessories-1-thumbnail.jpg",
        "Laptop": "https://www.istockphoto.com/photo/modern-laptop-gm172435388-23658364",
        "console": "https://cdn.pixabay.com/photo/2013/07/12/16/31/game-console-151081_1280.png",
        "moniter": "https://unsplash.com/photos/a-computer-monitor-sitting-on-top-of-a-wooden-desk-1YnuqxE0Hsc",
        "smart watch":"https://media.istockphoto.com/id/624904760/photo/smart-watch-with-blank-screen.jpg?s=612x612&w=0&k=20&c=WQrkCK80zDTAr4smPLZo-UEL2rlkPyXJsENYm8a7Xc4=",
        "sound box":"https://t3.ftcdn.net/jpg/08/28/48/14/240_F_828481443_3DeIdL9zrUnKjS3werbOnxr39wUxMAuH.jpg",
        "camera": "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=1024x1024&w=is&k=20&c=UjIzN8-KrVm1urSdQdwmfsy2Iiln2Si6AZozCx5F6dM=",
       "headphone":"https://media.istockphoto.com/id/2156644748/photo/wireless-headphones-3d-model.jpg?s=612x612&w=0&k=20&c=dp1DsnuNWw03QLCpravuH49baFhQI_oST3X2sVoUEeY=",
       "router":"https://www.istockphoto.com/photo/wireless-router-gm157587297-12550053?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frouter&utm_medium=affiliate&utm_source=unsplash&utm_term=router%3A%3A%3A",
        "mobile":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.android.com%2Fintl%2Fen_in%2Fphones%2F&psig=AOvVaw3wd0_RPPo1jbcOENADxtis&ust=1732889360567000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKj_tZOa_4kDFQAAAAAdAAAAABAE"

    };

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/categories', {
            store: "gadget",
        }).then(res => {
            setProducts(res.data.data);
        });
    }, []);

    // Custom Next Arrow
    const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
        return (
            <div
                className="custom-arrow next-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-25px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    fontSize: '20px',
                    color: '#000',
                }}
            >
                &#8250;
            </div>
        );
    };

    // Custom Prev Arrow
    const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
        return (
            <div
                className="custom-arrow prev-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-25px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    fontSize: '20px',
                    color: '#000',
                }}
            >
                &#8249;
            </div>
        );
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(6, data.length), // Default number of slides
        slidesToScroll: 3,
        nextArrow: <NextArrow />, // Pass custom NextArrow
        prevArrow: <PrevArrow />, // Pass custom PrevArrow
        responsive: [
            {
                breakpoint: 1024, // Screen width <= 1024px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // Screen width <= 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // Screen width <= 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600, // Screen width <= 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <Container>
            <section id='categories'>
                <h3>Featured Categories</h3>
                <div className="slider-container" style={{ position: 'relative' }}>
                    <Slider {...settings}>
                        {data.length ? (
                            data.map((item: any) => (
                                <Col xs={5} key={item.id}>
                                    <Card
                                        style={{
                                            height: '190px',
                                            width: '160px',
                                            margin: '0',
                                            display: "flex",
                                            // flexDirection: "column",
                                            alignItems: "center",
                                            // justifyContent: "center",
                                            // objectFit:"cover"
                                        }}
                                        className="pop"
                                    >
                                        <Card.Img
                                            src={categoryImages[item.slug] || "/images/default.jpg"}
                                            alt={item.slug}
                                            style={{
                                                paddingTop: '20px',
                                                objectFit: "contain",
                                                width: "50%",
                                                height: "60%",
                                                // marginTop: "20px",
                                            }}
                                        />
                                        <Card.Body >
                                            <Card.Text className="catt" style={{ paddingTop: '0.01rem' }}>{item.slug}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Slider>
                </div>
                <hr></hr>
            </section>
        </Container>
    );
}

export default Categories;