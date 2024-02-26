import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
    <ul>
      <Link href='/'><li>home</li></Link>
      <Link href='/about'> <li>about</li></Link>
      <Link href='/blog'><li>blog</li></Link>
      <Link href='/contact'><li>contact</li></Link>
    </ul>
  </nav>
  )
}

export default Navbar
