module.exports = {
  siteMetadata: {
    title: `Martin Hansson`,
    description: `Portfolio för Martin Hansson för att demonstrera kunskaper inom Webbutveckling & Design`,
    author: `Martin Hansson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // Meta Taggar
    `gatsby-transformer-sharp`, // Images 
    `gatsby-plugin-sharp`, // Images
    `gatsby-plugin-sass`, // SCSS
    `gatsby-transformer-remark`, // För Markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Martin Hansson",
        short_name: "portfolio",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
        
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
