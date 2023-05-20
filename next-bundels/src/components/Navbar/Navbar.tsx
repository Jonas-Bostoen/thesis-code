import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>Home</Link>
      <Link href='/about'>Over</Link>
    </nav>
  )
}
