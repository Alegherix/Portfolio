import React from 'react'
import style from "../css/navbar.module.scss"
import {Link} from "gatsby"
import mediaIcons from "../constants/media"

export default () => {
  return (
    <div className={style.navbar}>
      <div className={style.info}>
        <h2>Martin Hansson</h2>
        <h3><span>Webbutvecklare,</span><span>Hobbyfotograf,</span>Träningsfantast</h3>
      </div>
      <div className={style.navigation}>
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/portfolio/">Portfölj</Link></li>
          <li><Link to="/blogg/">Blogg</Link></li>
          <li><Link to="/contact/">Kontakta mig</Link></li>
        </ul>
      </div>
      <div className={style.socialMedia}>
        <h3>Social Media</h3>
        <div className={style.mediaIcons}>
          {mediaIcons.map((item) => {
            return(<a key={item.name} href={item.url} alt={item.desc} rel="noopener noreferrer" target="_blank" >{item.icon}</a>)
          })}
        </div>
      </div>
    </div>
  )
}