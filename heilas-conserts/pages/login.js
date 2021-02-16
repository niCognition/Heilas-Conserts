import Head from 'next/head'

import React from 'react'
import Axios from 'axios'
import { Col, Container, Row, Image } from 'react-bootstrap'
import TopBanner from '../components/topbannercomponent.js'
import InputForm from '../components/inputcomponent.js'


export default function Login() {
    return (
        <div>
            <Head>
                <title>Heilas concerts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopBanner />
            <Container>
                <Row className="justify-content-center">
                    <Image src="\vishnu-r-nair-m1WZS5ye404-unsplash.jpg" />
                    <h1>Register Concert</h1>
                    <Col lg="10">
                        <InputForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}