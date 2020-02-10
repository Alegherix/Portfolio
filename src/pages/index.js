import React from 'react'
import Layout from "../components/layout"
import styles from "../css/index.module.scss"


function index() {
  return(
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Martin Hansson</h1>
        </div>
        <section>
          <h2>Webbutvecklare</h2>
          <p>Hejsan! Mitt namn är Martin, utvecklare sedan 2016 med erfarenhet inom
            automatisering, webbutveckling, samt en bakgrund inom Datavetenskap. Mitt nuvarande fokus ligger 
            på att bygga moderna & responsiva hemsidor. På min fritid så gillar jag att styrketräna, 
            och pyssla med hobbyprojekt inom programmering.
          </p>
        </section>
      </div>
    </Layout>
    )
}

export default index
