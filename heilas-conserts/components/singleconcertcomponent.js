import react from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import styles from '../components/singleconcertcomponent.module.css'




  

const ConcertCard = (props) => {

    return (    
        <Card className={styles.Card} border="dark" style={{ width: '100%'}}>
            <Container fluid>
                <Row>
                    <Col className={styles.Col} xs={10} md={4}>
                            <Image width="265" height="160"  class="post-thumb wp-post-image" alt="" loading="lazy" src={props.img}/>
                    </Col>
                    <Col xs={10} md={8}>
                        <h1>{props.name}</h1>
                        <h6>{props.stage}</h6>
                        <h2>{props.date}</h2>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}



export default ConcertCard;