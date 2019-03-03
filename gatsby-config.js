module.exports = {
  siteMetadata: {
    title: "Syx Ed",
    description: "A tool to view and edit Yamaha DX7 sysex files",
    author: "Francois W. Nel"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "syx-ed",
        short_name: "syx-ed",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
