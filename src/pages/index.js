import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import Welcome from "../components/Homepage/Welcome";
import Work from "../components/Homepage/Work";
import AsSeenIn from "../components/Homepage/AsSeenIn";
import PageLabel from "../components/shared/PageLabel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Photography" />
    </div>
    <Welcome />
    <Work />
    <AsSeenIn />
  </Layout>
);

export default IndexPage;
