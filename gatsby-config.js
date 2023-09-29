/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anime Sekai`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://api.jikan.moe/v4/seasons/now",
        rootKey: "JikanApiSeasonsNow",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://api.jikan.moe/v4/top/anime",
        rootKey: "JikanApiTop",
      },
    },
  ],
};
