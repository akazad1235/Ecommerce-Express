import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BigSlider from './BigSlider';


const HomeTop = () => {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col log={3} md={3} sm={12}>
                        <h2>Mega Munu</h2>
                    </Col>
                    <Col log={9} md={9} sm={12}>
                        <BigSlider/>
                    </Col>
                   
                </Row>
            </Container>
        </>
    );
};

export default HomeTop;