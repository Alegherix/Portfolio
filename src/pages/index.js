import React from 'react'
import Layout from "../components/layout"
import styles from "../css/index.module.scss"
import Icon from "../assets/jagSvg2.svg"


function index() {
  
  return(
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Martin Hansson</h1>
        </div>
        <section>
          <h2>Utvecklare & Designer</h2>
          <div className={styles.content}>
            {/* <div> */}
              <p>Hejsan! Mitt namn är <span className={styles.name}>Martin</span>. Jag har programmerat sedan 2016 och har erfarenhet inom
                automatisering, webbutveckling, samt en bakgrund inom Datavetenskap. Mitt nuvarande fokus ligger 
                i att bygga moderna & responsiva hemsidor. För nävarande så arbetar jag på att förbättra mina design färdigheter. På min fritid så gillar jag att styrketräna, 
                och pyssla med hobbyprojekt inom programmering.
              </p>
              {/* <button>Kontakta mig</button> */}
            {/* </div> */}
            <Icon />
          </div>
        </section>
      </div>
    </Layout>
    )
}

export default index
