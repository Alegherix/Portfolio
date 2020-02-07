import React from 'react'
import Layout from "../components/layout"
import style from "../css/blogg.module.scss"

export default () => {
  return (
    <Layout>
      <div className={style.blogg}>
        <div className={style.container}>
          <h1>Blogg</h1>
        </div>
      </div>
    </Layout>
  )
}