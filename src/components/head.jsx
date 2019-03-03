import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { title, description, author } from "../data/constants";

const Head = (props) => {
  const { lang, meta, keywords } = props;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: "description",
          content: description
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: description
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: author
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: description
        }
      ]
        .concat(
          /* eslint-disable indent */
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", ")
              }
            : []
          /* eslint-enable indent */
        )
        .concat(meta)}
    />
  );
};

Head.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};

Head.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string)
};

export default Head;
