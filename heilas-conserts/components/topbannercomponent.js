import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopBanner = () => {

    return (
        <Container fluid>
            <Row >
                <Col>
                    <h1>HEILAS CONCERTS*</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                    <h3>Column for menu</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default TopBanner;