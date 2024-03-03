import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
    <ul>
      <li><Link href='/'><span className={styles.Link}>Home</span></Link></li>
      <li><Link href='/about'> <span className={styles.Link}>About</span></Link></li>
      <li><Link href='/blog'><span className={styles.Link}>Blog</span></Link></li>
      <li><Link href='/contact'><span className={styles.Link}>Contact</span></Link></li>
    </ul>
  </nav>
  )
}

export default Navbar
