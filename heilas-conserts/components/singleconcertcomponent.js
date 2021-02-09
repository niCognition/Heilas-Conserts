import react from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ConcertCard = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <h1>BAND IMAGE</h1>
                </Col>
                <Col md={6}>
                    <h1>BAND NAME</h1>
                    <h5>STAGE NAME</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default ConcertCard;