module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: "Portfolio page of Piotr Pospiech developer and designer based in Aarhus Denmark",
    url: "https://billig-animation.piotrpospiech.com/",
    author: "Piotr Pospiech",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,400i,600,700,800`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
