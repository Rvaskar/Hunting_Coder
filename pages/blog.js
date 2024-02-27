import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from 'next/link'

const Blog = () => {
  return (

    <main className={`${styles.main} `}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href={'/blogpost/learn-javascript'}>
          <h3>How to write jsx code in 2024?</h3>
          </Link>
          <p>Find in-depth information about Next.js features and&nbsp;API.</p>
        </div>

        <div className={styles.card}>
          <h3>How to write jsx code in 2024?</h3>
          <p>Find in-depth information about Next.js features and&nbsp;API.</p>
        </div>

        <div className={styles.card}>
          <h3>How to write jsx code in 2024?</h3>
          <p>Find in-depth information about Next.js features and&nbsp;API.</p>
        </div>
      </div>
      </main>
  );
};

export default Blog;
