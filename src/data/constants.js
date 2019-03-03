/* TODO: Fetch site metadata using React hooks when they are compatible with hot reloading.
 * https://github.com/gatsbyjs/gatsby/issues/9489
 * https://github.com/gaearon/react-hot-loader/issues/1088
 */

// import { useStaticQuery, graphql } from "gatsby";

// const getSiteData = () => {
//   return useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   );
// };

// const { site } = getSiteData();
// const { siteMetadata } = site;

const siteMetadata = {
  title: "Syx Ed",
  description: "A tool to view and edit Yamaha DX7 sysex files",
  author: "Francois W. Nel"
};

export const { title, description, author } = siteMetadata;
