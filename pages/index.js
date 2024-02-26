import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link'
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <style jsx>
      {`
        
      `}
    </style>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h1 className={styles.headFont}>Hunting Coder</h1>
          <div className={styles.imgWrap} >
            <Image className={styles.myImg} src="/homeimg.jpg" width={237} height={158} />
          </div>
          <p>A blog for Hunting coders by Hunting coder</p>
        </div>
        <div className= {styles.mainBlogHead}>
          <h2>Latest Blog</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.card} >
            <h3>
              How to write jsx code in 2024?
            </h3>
            {/* <span>-&gt;</span> */}
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
            
          </div>

          <div className={styles.card} >
            <h3>
              How to write jsx code in 2024?
            </h3>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
            
          </div>

          <div className={styles.card} >
            <h3>
              How to write jsx code in 2024? 
            </h3>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
            
          </div>

          

          
          
        </div>
      </main>
    </>
  );
}
