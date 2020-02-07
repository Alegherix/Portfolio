import React from 'react'
import Layout from "../components/layout"
import personalProjects from "../constants/personalProjects"
import style from "../css/portfolio.module.scss"
import ProjectTemplate from "../components/templates/projectTemplate"

export default () => {
  return (
    <Layout>
      <div className={style.portfolio}>
        <div className={style.container}>
          <h1>Portfölj</h1>
          {personalProjects.map((item, index) => {
            return(<ProjectTemplate 
              key={index}
              src={item.src}
              heading={item.name}
              desc={item.desc}
              btnText={item.btnText}
              url={item.url}
            />)
          })}
        </div>
      </div>
    </Layout>
  )
}