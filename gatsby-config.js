require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      resolve: "gatsby-source-graphql",
      options: {
        fieldName: `craft`,
        typeName: `Craft`,
        url: `http://craft.local:8080/api`,
        icon: `src/pages/images/logo.png`,
      },
    },
  ],
};
