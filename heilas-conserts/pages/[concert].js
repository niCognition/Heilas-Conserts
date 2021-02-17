import { useRouter } from 'next/router';
import Head from 'next/head';

import React from 'react';
import TopBanner from '../components/topbannercomponent.js';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ConcertInfo from '../components/concertinfoboxcomponent.js'


function Concert({ concerts, error }) {

    /* - So fkn frustrated by this shit :man_facepalming:
        const router = useRouter();
        console.log(router.query.concert);
    
        const API_URL = `http://localhost:8080/concerts/${router.query.concert}`;
        const getConcertById = async ctx => {
            try {
                const res = await axios.get(API_URL);
                const concert = res.data;
    
                return { concert };
    
            } catch (err) {
                return { error };
            };
        }
    */

    const router = useRouter();
    console.log(concerts);
    console.log(router.query.concert);

    const concert = concerts.filter((concert) => concert.id == router.query.concert);
    console.log(concert);


    if (error) {
        return (
            <div>An error occured: {error.message}</div>
        )
    }

    return (
        <div>
            <Head>
                <title>Heilas Concerts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopBanner />

            <ConcertInfo 
            
            img={concert[0].bandImageUrl}
            date={concert[0].dateTime}
            stage={concert[0].stage}
            age={concert[0].ageLimit}
            name={concert[0].bandName}
            info={concert[0].bandInfo}
            id={concert[0].spotifyId}
            
            />

       
        </div>
    )
}

Concert.getInitialProps = async ctx => {
    try {
        const res = await axios.get('http://localhost:8080/concerts');
        const concerts = res.data;
        return { concerts };

    } catch (error) {
        return { error };
    }
}

export default Concert;

  /*   <Container>
                <Row >
                    <Card bg="light">
                        <Col>
                            <Card.Img src={concert[0].bandImageUrl} />
                        </Col>
                    </Card>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Date </h3>
                            </Col>
                            <Col>
                                <h4>{concert[0].dateTime}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Stage </h3>
                            </Col>
                            <Col>
                                <h4>{concert[0].stage}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Age limit </h3>
                            </Col>
                            <Col>
                                <h4>{concert[0].ageLimit}</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content" fluid>
                    <Col>
                        <h1>{concert[0].bandName}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container> */