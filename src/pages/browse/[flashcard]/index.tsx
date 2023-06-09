import Head from "next/head";
import {questions} from "../../../../data/questions";
import styles from '@/styles/Home.module.css'
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { Search } from "tabler-icons-react";
const inter = Inter({ subsets: ['latin'] })

export default function Browse({question, answer, index} : any) {
    const [isFlipped, toggleFlipped] = useState(false);
    
    return (
      <>
  
          {!isFlipped && <div className={styles.center} onClick={() => toggleFlipped(true)}>
              <h2 className={inter.className}>Q: {question}</h2>
          </div>}

          {isFlipped && <div className={styles.center} onClick={() => toggleFlipped(false)}>
              <h2 className={inter.className}>A: {answer}</h2>
          </div>}
  
          <div className={styles.grid}>
            {index > 0 ?
                <Link
                    href={`${index}`}
                    className={styles.button}
                >
                    <h2 className={inter.className}>
                    <span>&lt;- Prev</span>
                    </h2>
                </Link>
            :   
                <div></div>
            }
              
            {index < questions.length - 1 && 
                <Link
                    href={`${index + 2}`}
                    className={styles.button}
                    >
                    <h2 className={inter.className}>
                    <span>Next -&gt;</span>
                    </h2>
                </Link>
            }
              
          </div>
       
      </>
    )
}

export async function getStaticProps(context : any) {
    console.log(context);
    // Create an array of paths for each category
    // const question = "TEST QUESTION for " + context.params.flashcard;
    // const answer  = "TEST ANSWER";
    let index = parseInt(context.params.flashcard) - 1;

    const question = questions[index].question;
    const answer = questions[index].answer;
    
    // Return the paths as props
    return {
      props : {
        question,
        answer,
        index
      }
    }
}

export async function getStaticPaths() {
    
    // Create an array of paths for each category
    const paths = questions.map((flashcard : any, index : number) => ({
      params: { flashcard: index.toString() }
    }));
    
    // Return the paths as props
    return {
      paths,
      fallback: false
    }
}