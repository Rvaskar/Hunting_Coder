import React from 'react'
import styles from '../styles/About.module.css'
import Image from "next/image";

const About = () => {
  return (
    <div className= {styles.container}>
      <main className={`${styles.main} `}>
      <h1>Coders Page</h1>
      <p className= {styles.hr}> </p>

      <div className={styles.aboutCont}>
        <div className={styles.imgWrap} >
            <Image className={styles.myImg} src="/about-img1.jpg" alt="img:coder" width={500} height={300} />
          </div>
        <div className={styles.information}> 
          <h1>Hunting Coders</h1>
          <p>Welcome to our website! We are a team of coding enthusiasts who are passionate about sharing our knowledge and expertise with fellow developers. Our website features a variety of blog posts on different development topics, ranging from programming languages to software development best practices. Whether you are a beginner looking to learn the basics or an experienced coder seeking advanced tips and tricks, our website has something for everyone. Join us on our coding journey and stay updated on the latest trends in the tech world. Happy coding</p>
        </div>
      </div>
      <p className= {styles.hr}> </p>

      <div className={styles.grid}>
          <div className={styles.card} >
            <h3>
              What we do?
            </h3>
            {/* <span>-&gt;</span> */}
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
            
          </div>

          <div className={styles.card} >
            <h3>
              Our Mission
            </h3>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
            
          </div>

          <div className={styles.card} >
            <h3>
              Our Vision
            </h3>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
            
          </div>

        </div>
      </main>
    </div>
  )
}

export default About
