import React, {useEffect, useState }from "react";
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlogs)

  // const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return; // No point rendering if the data

  //   const {slug} = router.query;

  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
  //     return a.json();})
  //     .then((parsed)=>{
  //       // console.log(parsed)
  //       setBlog(parsed)
  //     })
  
  // }, [router.isReady])

    
  return (
    <div className= {styles.container}>
      <main className={`${styles.main} `}>
      <h1>{blog && blog.title}</h1>
      <p className= {styles.hr}> </p>
      <p>
        {blog && blog.description}
      </p>
        
      <p>{blog && blog.content}</p>
      <p>-{blog && blog.author}</p>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  // if (!router.isReady) return; // No point rendering if the data

    const {slug} = context.query;

    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlogs = await data.json()
    
    
    // .then((a)=>{
    //   return a.json();})
    //   .then((parsed)=>{
    //     // console.log(parsed)
    //     setBlog(parsed)
    //   })

  return{
    props: {myBlogs},
  }
}

export default Slug
