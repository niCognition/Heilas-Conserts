import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import styles from '../components/concertinfoboxcomponent.module.css'



const ConcertInfo = (props) => {

    return (
        <Container fluid>
            <Row className={styles.space}>
                <Col xs={10} md={6}>
                        <Image width="450" height="250" className="post-thumb wp-post-image" alt="" loading="lazy" src={props.img} />
                </Col>
                <Col className={styles.infobox} xs={10} md={4}>
                        <h5>Date: {props.date}</h5>
                        <h5>Time: {props.date}</h5>
                        <h5>Stage: {props.stage}</h5>
                        <h5>Age Limit: {props.age}</h5>
                        <h5>Price: {props.price}</h5>
                </Col>
            </Row>
            <Row>
                <h1>{props.name}</h1>
            </Row>
            <Row>
                <h6>{props.info}</h6>
            </Row>


        </Container>

    )

}

export default ConcertInfo;