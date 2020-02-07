
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode= ({getNode, node, actions}) => {
  const { createNodeField } = actions;
  if( node.internal.type === "MarkdownRemark"){
    const slug = createFilePath({node, getNode, basePath: "markdown"})
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  const result = await graphql(`
    query{
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  // Mappar över och använder den skapade slugen som path,
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blogPost.js"),
      context: {
        slug: node.fields.slug
      }
    })
  })
  
}