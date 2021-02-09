import react from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const ConcertCard = () => {
    return (
        <Card border="dark" style={{ width: '100%'}}>
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
        </Card>
    )
}

export default ConcertCard;