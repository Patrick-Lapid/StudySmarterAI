import Head from 'next/head'
// import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { Search } from 'tabler-icons-react';

const inter = Inter({ subsets: ['latin'] })

export default function Browse() {
  
  return (
    <>
      
        <Link className={styles.center} href={`/browse/1`}>
            <h2 className={inter.className}>Browse All Flashcards</h2>
        </Link>

        <div></div>

    </>
  )
}


