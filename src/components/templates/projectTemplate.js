import React from 'react'
import styled from "../../css/projectTemplate.module.scss"
import FluidImage from "./fluidImage"


export default ({heading, desc, btnText, src, url}) => {
  return (
    <article>
      <div className={styled.imgContainer}>
        <FluidImage src={src} />
      </div>
      <div className={styled.descContainer}>
        <h2>{heading}</h2>
        <p>{desc}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{btnText}</a>
    </div>
  </article>
  )
}