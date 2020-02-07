import React from 'react'
import "../css/layout.scss"
import Navbar from "./navbar"
import Footer from "../components/footer"
import style from "../css/layout.module.scss"

export default ({children}) => {
  return (
    <div className={style.layout}>
      <div className={style.navContainer}>
        <Navbar />
      </div>
      <div className={style.contentContainer}>
        {children}
        <Footer />
      </div>
    </div>
  )
}