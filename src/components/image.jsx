import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/* Default Image component updated to take in props that specify file name and alt message.
 * Info: https://noahgilmore.com/blog/easy-gatsby-image-components/
 */

const Image = (props) => {
  const { fileName, alt } = props;

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find((n) => {
          return n.node.relativePath.includes(fileName);
        });

        if (!image) return null;

        const imageSizes = image.node.childImageSharp.sizes;

        return <Img alt={alt} sizes={imageSizes} />;
      }}
    />
  );
};

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
