import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { assets } from '../assets';
import '../assets/AdBanner.css';

type BannerItem = {
  image: string;
  title: string;
  discount: string;
  description: string;
  buttonText?: string;
  badgeVariant?: string;
};

export default function AdBanner() {
  const banners: BannerItem[] = [
    {
      image: assets.adbanner,
      title: "Electronics & Mobiles",
      discount: "30% OFF",
      description: "Get premium devices at amazing prices",
      buttonText: "Shop Now",
      badgeVariant: "warning"
    },
    {
      image: assets.adbanner2,
      title: "Laptops & E-Products",
      discount: "20% OFF",
      description: "Latest models with exclusive discounts",
      buttonText: "Explore Deals",
      badgeVariant: "danger"
    }
  ];

  return (
    <Container className="ad-banner-container">
      <Row className="g-3 g-md-4">
        {banners.map((banner, index) => (
          <Col key={index} xs={12} md={6}>
            <div 
              className="ad-banner-card"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="banner-overlay" />
              <div className="banner-content">
                <span className={`discount-badge bg-${banner.badgeVariant}`}>
                  {banner.discount}
                </span>
                <h3>{banner.title}</h3>
                <p>{banner.description}</p>
                <Button variant="light" className="cta-button">
                  {banner.buttonText}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}