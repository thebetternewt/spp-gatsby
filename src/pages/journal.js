import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import PageLabel from "../components/shared/PageLabel";
import FromTheBlog from "../components/shared/FromTheBlog";
import FeaturedPost from "../components/shared/FeaturedPost";

const JournalPage = () => (
  <Layout>
    <SEO title="Journal" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Journal" />
    </div>
    <FeaturedPost sectionTitle="Latest Post" />
    <FromTheBlog title="Recent Posts" />
  </Layout>
);

export default JournalPage;
