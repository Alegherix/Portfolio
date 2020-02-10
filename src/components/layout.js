import React from 'react'
import "../css/layout.scss"
import Navbar from "./navbar"
import Footer from "../components/footer"
import style from "../css/layout.module.scss"

export default ({children}) => {
  return (
    <div className={style.layout}>
      <nav className={style.navContainer}>
        <Navbar />
      </nav>
      <main className={style.contentContainer}>
        {children}
        <Footer />
      </main>
    </div>
  )
}