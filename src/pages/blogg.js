import React from 'react'
import Layout from "../components/layout"
import style from "../css/blogg.module.scss"
import {graphql, Link} from "gatsby"

export default ({data}) => {
  return (
    <Layout>
      <div className={style.blogg}>
        <div className={style.container}>
          <h1>Blogg</h1>
        </div>
        <div className={style.blogContainer}>
          {data.allMarkdownRemark.edges.map(({node}) => {
           return(
             <div className={style.blogPost}>
               <Link to={node.fields.slug}><h2>{node.frontmatter.title}</h2></Link>
               <h3>{node.frontmatter.date}</h3>
               <p>{node.excerpt}</p>
             </div>
           )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){  
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`

// sort: { fields: [frontmatter___date], order: DESC }
// (formatString: "DD MMMM, YYYY")