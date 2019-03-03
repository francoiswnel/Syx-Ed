import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const NotFoundPage = () => {
  const message = "404: Not found";

  return (
    <Layout>
      <Head />
      <h1>{message}</h1>
    </Layout>
  );
};

export default NotFoundPage;
