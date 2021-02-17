import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import styles from '../components/concertinfoboxcomponent.module.css'



const ConcertInfo = (props) => {

    return (
        <Container fluid>
            <Row className={styles.toprow}>
                <Col className={styles.image} xs={12} md={8}>
                    <Image className="post-thumb wp-post-image" alt="" loading="lazy" src={props.img} fluid />
                    <Col className={styles.title}>
                        <p>{props.name}</p>
                    </Col>
                </Col>
                <Col className={styles.infobox} xs={12} md={4}>
                    <h5><b>Date:</b> {props.date}</h5>
                    <h5><b>Time:</b> {props.date}</h5>
                    <h5><b>Stage:</b> {props.stage}</h5>
                    <h5><b>Age Limit:</b> {props.age}</h5>
                    <h5><b>Price:</b> {props.price}</h5>
                </Col>
            </Row>
            <Row>
                <br />
            </Row>
            <Row >
                <Col className={styles.concertinfo}>
                    <Row>
                        <Col className="secondary" xs={2}>
                            <h3>Info:</h3>
                        </Col>
                        <Col>
                            <h3>{props.info}</h3>
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </h3>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Container>
    )

}

export default ConcertInfo;