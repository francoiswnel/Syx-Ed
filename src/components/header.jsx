import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

const Header = (props) => {
  const { siteTitle } = props;

  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/" className="link header-link">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
