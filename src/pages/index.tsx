import Head from 'next/head'
// import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import styles from '../styles/Landing.module.css'
import Link from 'next/link';

export default function Home() {
  
  return (
    <>

        <div className={styles.hero}>
        
            <h1 className={styles.heroText}>Study Smarter with StudySmarter.AI</h1>
            <h4 className={styles.heroSubtext}>Cram for Exams quicker with AI generated Flashcards &#8594;</h4>
            {/* <Link className={styles.center} href={`/browse/1`}>
                <h2>Browse All Flashcards</h2>
            </Link> */}

            <div></div>
        </div>
    </>
    
  )
}