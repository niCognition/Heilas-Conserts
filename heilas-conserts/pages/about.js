import Head from 'next/head'

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TopBanner from '../components/topbannercomponent.js'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Heilas Concerts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopBanner />

            <Container className={styles.grid}>
                <Row className="justify-content-center">
                    <Col className={styles.title}>
                        <h1>About Heilas</h1>
                        <br/>
                        <h5>
                            This is supposed to be a site where you can make concert bookings,
                            due to lack of time for this project it's not possible to make bookings.
                            But it's possible to add concerts and view the concerts.
                        </h5>
                        <br/>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h6>
                        <br/>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}