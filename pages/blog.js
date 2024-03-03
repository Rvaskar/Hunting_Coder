import React, {useEffect, useState }from "react";
import styles from "@/styles/Blog.module.css";
import Link from 'next/link'

const Blog = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // console.log('useEffect is running')
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();}).then((parsed)=>{
        // console.log(parsed)
        setBlogs(parsed)
      })
  },[])


  return (

    <main className={`${styles.main} `}>
      <div className={styles.grid1}>
        {blogs.map((blogItem)=>{
          return <div key={blogItem.slug} className={styles.card}>
            <Link href={`/blogpost/${blogItem.slug}`}>
            <h3 className={styles.blog_title}>{blogItem.title}</h3>
            </Link>
            <p>{blogItem.content.substr(0,200)}</p>
          </div>
          
        })}
      </div>
      </main>
  );
};

export default Blog;
