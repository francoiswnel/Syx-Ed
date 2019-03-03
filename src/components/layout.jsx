import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { title } from "../data/constants";
import "../styles/site.css";

const Layout = (props) => {
  const { children } = props;
  const copyrightNotice = `© ${new Date().getFullYear()} ${title}`;

  return (
    <>
      <Header siteTitle={title} />
      <div className="site-container">
        <main>{children}</main>
        <footer>{copyrightNotice}</footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
