import Head from 'next/head'

import React from 'react'
import TopBanner from '../components/topbannercomponent.js'
import styles from '../styles/Home.module.css'
import ReactButtons from '../components/reactbootstrapelement'

export default function Home() {
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
          <h3>Heidi kolla reactbootstrapelement.js i components foldern för att se hur enkelt det är med React-bootstrap</h3>
          <ReactButtons></ReactButtons>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
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
