import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import PageLabel from "../components/shared/PageLabel";
import FromTheBlog from "../components/shared/FromTheBlog";
import LatestPost from "../components/Blog/LatestPost";

const JournalPage = () => (
  <Layout>
    <SEO title="Journal" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Journal" />
    </div>
    <LatestPost />
    <FromTheBlog title="Recent Posts" />
  </Layout>
);

export default JournalPage;
