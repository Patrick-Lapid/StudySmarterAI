import Head from 'next/head'
// import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Browse() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          
        </div>

        <Link className={styles.center} href={`/browse/1`}>
            <h2 className={inter.className}>Browse All Flashcards</h2>
        </Link>

        <div></div>

      </main>
    </>
  )
}


