import Head from 'next/head'

import React from 'react'
import TopBanner from '../components/topbannercomponent.js'
import ConcertCard from '../components/singleconcertcomponent.js'
import styles from '../styles/Home.module.css'
import ReactButtons from '../components/reactbootstrapelement'
import axios from 'axios';
import fetch from "node-fetch"




/* export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/concert')
  const data = await res.json()

  console.log(data);
  
    return {
      props: { data },
  }
}
*/



function Home({ concerts, error }) {

  if (error) {
    return <div>An error occured: {error.message}</div>;
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
            <ConcertCard img={concert.bandImageUrl} name={concert.bandName} stage={concert.stage} date={concert.dateTime} />
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
