import Link from 'next/link'
import React from 'react';
import react from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import styles from '../components/singleconcertcomponent.module.css'



const ConcertCard = (props) => {

    return (
        <Card className={styles.card} border="dark" style={{ width: '100%' }}>
            <Link as={`/${props.id}`} href="/[concerts]">
                <Container fluid>
                    <Row>
                        <Col xs={10} md={4}>
                            <Image width="265" height="160" className="post-thumb wp-post-image" alt="" loading="lazy" src={props.img} />
                        </Col>
                        <Col className={styles.cardtext} xs={10} md={6}>
                            <h1>{props.name}</h1>
                            <h6><b>{props.stage}</b></h6>
                            <h2>{props.date}</h2>
                            <h6>{props.time}</h6>
                        </Col>
                    </Row>
                </Container>
            </Link>
        </Card>
    )
}



export default ConcertCard;