import { useRouter } from 'next/router';
import Head from 'next/head';
import moment from 'moment';
import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';

import styles from '../styles/Home.module.css';
import ConcertInfo from '../components/concertinfoboxcomponent.js';
import TopBanner from '../components/topbannercomponent.js';


function Concert({ concerts, error }) {

    const router = useRouter();

    const concert = concerts.filter((concert) => concert.id == router.query.concert);

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
                    date={moment(concert[0].dateTime).format('DD MMM YYYY')}
                    time={moment(concert[0].dateTime).format('HH:mm')}
                    stage={concert[0].stage}
                    age={concert[0].ageLimit}
                    name={concert[0].bandName}
                    info={concert[0].bandInfo}
                    id={concert[0].spotifyId}
                />
                <iframe
                    src={`https://open.spotify.com/embed/artist/${concert[0].spotifyId}`}
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"></iframe>
            </Container>
            <footer className={styles.footer}>
                <p>Made by Heidi and Niclas, Newton Kompetensutveckling 2021</p>
            </footer>
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