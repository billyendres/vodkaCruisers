require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        fieldName: `craft`,
        typeName: `Craft`,
        url: `http://craft.local:8080/api`,
        headers: {
          // Authorization: `Bearer 5LgV5Pmvm0n7vhN1PfzjpjNkQt_mAi2B`,
          // Authorization: `Bearer kBfWX1sL5aTL5BZOsfXtRAl7BHWD88zW`,
        },
        // headers: {
        //   Authorization: `Bearer kBfWX1sL5aTL5BZOsfXtRAl7BHWD88zW`,
        // },
      },
    },
  ],
};
