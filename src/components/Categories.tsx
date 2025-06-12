import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Categories() {
    const [data, setProducts] = useState([]);
    const categoryImages: Record<string, string> = {
        "accessories": "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "laptop": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "console": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "monitor": "https://images.unsplash.com/photo-1546538915-a9e2c8d6b7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "smart watch": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "sound box": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "camera": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "headphone": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "router": "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "mobile": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "default": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    };

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/categories', {
            store: "gadget",
        }).then(res => {
            setProducts(res.data.data);
        }).catch(error => {
            console.error("Error fetching categories:", error);
        });
    }, []);

    const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
        return (
            <div
                className="custom-arrow next-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-15px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    fontSize: '24px',
                    color: '#333',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
            >
                &#8250;
            </div>
        );
    };
    const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
        return (
            <div
                className="custom-arrow prev-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-15px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    fontSize: '24px',
                    color: '#333',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
            >
                &#8249;
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(6, data.length),
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    };

    return (
        <Container className="my-5">
            <section id='categories'>
                <h3 className="mb-4 text-center text-md-start">Featured Categories</h3>
                <div className="slider-container px-3">
                    <Slider {...settings}>
                        {data.length ? (
                            data.map((item: any) => {
                                const normalizedSlug = item.slug.toLowerCase();
                                const imageUrl = categoryImages[normalizedSlug] || categoryImages["default"];
                                
                                return (
                                    <div key={item.id}>
                                        <Card
                                            className="category-card mx-auto"
                                            style={{
                                                height: '180px',
                                                width: '150px',
                                                border: 'none',
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                transition: 'transform 0.3s',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            <div className="d-flex flex-column align-items-center p-3 h-100">
                                                <div style={{
                                                    height: '80px',
                                                    width: '80px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <img
                                                        src={imageUrl}
                                                        alt={item.slug}
                                                        style={{
                                                            objectFit: "contain",
                                                            maxHeight: "100%",
                                                            maxWidth: "100%",
                                                            width: 'auto',
                                                            height: 'auto'
                                                        }}
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = categoryImages["default"];
                                                        }}
                                                    />
                                                </div>
                                                <Card.Body className="text-center p-0 mt-2">
                                                    <Card.Text className="m-0 fw-bold" style={{
                                                        fontSize: '14px',
                                                        color: '#333',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        maxWidth: '120px'
                                                    }}>
                                                        {item.slug}
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>
                                        </Card>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-4">Loading categories...</div>
                        )}
                    </Slider>
                </div>
                <hr className="mt-5" />
            </section>
        </Container>
    );
}

export default Categories;