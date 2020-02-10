import React from 'react'
import style from "../css/navbar.module.scss"
import { Link, useStaticQuery } from "gatsby"
import mediaIcons from "../constants/media"
import Image from "gatsby-image"

export default () => {

  const imgData = useStaticQuery(graphql`
    query{
      img:file(relativePath:{eq:"jagRund.jpg"}){
        childImageSharp{
          fixed(quality: 100, height:225, width: 225){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={style.navbar}>
      <div className={style.info}>
        <Image fixed={imgData.img.childImageSharp.fixed} />
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