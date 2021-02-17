import Head from 'next/head';
import React from 'react';
import TopBanner from '../components/topbannercomponent.js';
import ConcertCard from '../components/singleconcertcomponent.js';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import moment from 'moment';

function Home({ concerts, error }) {

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Heilas Concerts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBanner />

      {/* Next.js boilerplate code with some modifications */}
      <main className={styles.main}>
        <div className={styles.grid}>

          {concerts.map(concert => (

            

            <ConcertCard

              key={concert.id} img={concert.bandImageUrl}
              name={concert.bandName} stage={concert.stage}
              date={moment(concert.dateTime).format('DD MMMM')} 
              time={moment(concert.dateTime).format('HH:mm')} 
              id={concert.id} />
          ))}

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}


Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:8080/concerts');
    const concerts = res.data;
    return { concerts };

  } catch (error) {
    return { error };
  }
};



export default Home;
