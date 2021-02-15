import react from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import styles from '../components/singleconcertcomponent.module.css'
  

const ConcertCard = () => {
    return (
        <Card border="dark" style={{ width: '100%'}}>
            <Container fluid>
                <Row>
                    <Col className={styles.Col} xs={10} md={4}>
                            <Image width="265" height="160" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKHZBlupW0z2e1c0vnPBaiEbE4SZG3owFsA&usqp=CAU" class="post-thumb wp-post-image" alt="" loading="lazy" />
                    </Col>
                    <Col xs={10} md={8}>
                        <h1>JAYMES YOUNG (US)</h1>
                        <h6>Silver Stage</h6>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default ConcertCard;