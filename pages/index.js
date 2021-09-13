import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Topsy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h3>
          Guess what topsy?
        </h3>
        <h1 className={styles.title}>
            We did it!!!
        </h1>
      </main>
    </div>
  )
}
