import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const FeaturedProducts = () => {
    const featuredProducts =[
        {
            id:1,
            title:'Lenavo laptop model 54871',
            price:'1500',
            img:'https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg'
        },
        {
            id:2,
            title:'HP laptop model 548d71',
            price:'5500',
            img:'https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg'
        },
        {
            id:3,
            title:'Lenavo laptop model 54871',
            price:'1500',
            img:'https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg'
        },
        {
            id:4,
            title:'Lenavo laptop model 54871',
            price:'1500',
            img:'https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg'
        },
        {
            id:5,
            title:'Lenavo laptop model 54871',
            price:'1500',
            img:'https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg'
        },
        {
            id:6,
            title:'Lenavo laptop model 54871',
            price:'1500',
            img:'https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg'
        }
    ]
    return (
       <>
        <Container fluid={true}>
            <h4 className="text-center section-title">Featured Products</h4>
            <p className="text-center section-sub-title">Some Of Our Exlusive Collection, You May Like</p>
            <Row>
                {
                    featuredProducts.map(fProducts => {
                       return (
                            <Col xl={2} lg={2} md={2} sm={4} sx={6}>
                                <Card className="image-box card">
                                    <img src={fProducts.img} alt="" />
                                
                                    <Card.Body>
                                        <h1 className="product-name-on-card text-center">Product Title</h1>
                                        <p className="product-price-on-card text-center">Price: 500tk</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })
                }
                
            </Row>
        </Container>
       </>
    );
};

export default FeaturedProducts;