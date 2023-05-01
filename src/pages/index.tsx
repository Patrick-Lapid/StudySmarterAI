import { Inter } from 'next/font/google'
import styles from '../styles/Landing.module.css'
import {Text} from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  
  return (
    <>

        <div className={styles.hero}>
        
            <h1 className={styles.heroText}>Study Smarter with StudySmarter.<Text variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} style={{display: "inline"}}>ai</Text></h1>
            <h4 className={styles.heroSubtext}>Cram for Exams quicker with AI generated Flashcards &#8594;</h4>
  
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className={styles.infoCard}>pic</div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoCard}>pic</div>
            <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
          
        </div>

        {/* <div className={styles.topicSection}>
          <div className={styles.topicTitle}>

          </div>

          <div className={styles.topicGrid}></div>

        </div> */}

    </>
    
  )
}