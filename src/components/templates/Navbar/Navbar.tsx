import React from 'react'

import classes from './Navbar.module.scss'

type NavbarProps = {
  tabs: {
    [key: string]: string
  }
}

const Navbar = ({ tabs }: NavbarProps) => (
  <nav className={classes.navbar}>
    <ul>
      {Object.keys(tabs).map((key) => (
        <li key={key}>{key}</li>
      ))}
    </ul>
  </nav>
)

export default Navbar
