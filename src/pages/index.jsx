import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Editor from "../components/editor";

const IndexPage = () => (
  <Layout>
    <Head
      keywords={["yamaha", "dx7", "korg", "volca", "fm", "midi", "sysex"]}
    />
    <Editor />
  </Layout>
);

export default IndexPage;
