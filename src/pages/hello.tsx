import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Hello: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello!
        </h1>
      </main>
    </div>
  )
}

export default Hello
