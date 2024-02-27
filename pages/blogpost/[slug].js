import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className= {styles.container}>
      <main className={`${styles.main} `}>
      <h1>this is title {slug}</h1>
      <p className= {styles.hr}> </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi excepturi sed nesciunt doloribus harum distinctio quasi aspernatur illum tempora, placeat iste porro cupiditate! Nesciunt omnis molestias fuga reprehenderit placeat?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum animi excepturi sed nesciunt doloribus harum distinctio quasi aspernatur illum tempora, placeat iste porro cupiditate! Nesciunt omnis molestias fuga reprehenderit placeat?</p>
      </main>
    </div>
  )
}

export default Slug
