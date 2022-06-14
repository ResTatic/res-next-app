import type { NextPage } from 'next'
import Head from 'next/head'
import { Hello } from '../components/Hello'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Custom Create Next App</title>
      <meta name="color-scheme" content="dark light" />
      <meta name="theme-color" content="#181a1b" />

      <link rel="manifest" href="/manifest.webmanifest" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        <Hello />
        Welcome to{' '}
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">
          Next.js!
        </a>
      </h1>
    </main>

    <footer className={styles.footer}>
      <a href="https://github.com/ResTatic" target="_blank" rel="noreferrer">
        Customized by Res
      </a>
    </footer>
  </div>
)

export default Home
