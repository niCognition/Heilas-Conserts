import { useRouter } from 'next/router';
import Head from 'next/head';

import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import axios from 'axios';

import styles from '../styles/Home.module.css';
import ConcertInfo from '../components/concertinfoboxcomponent.js';
import TopBanner from '../components/topbannercomponent.js';


function Concert({ concerts, error }) {

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
        <div className={styles.container}>
            <Head>
                <title>Heilas Concerts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopBanner />
            <Container className={styles.grid}>
                <ConcertInfo
                    img={concert[0].bandImageUrl}
                    date={concert[0].dateTime}
                    stage={concert[0].stage}
                    age={concert[0].ageLimit}
                    name={concert[0].bandName}
                    info={concert[0].bandInfo}
                    id={concert[0].spotifyId}
                />
            </Container>

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