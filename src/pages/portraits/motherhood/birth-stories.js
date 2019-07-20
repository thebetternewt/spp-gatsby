import React from "react";

import Layout from "../../../components/Layout";
import SEO from "../../../components/Seo";
import Slider from "../../../components/Slider";
import PageLabel from "../../../components/shared/PageLabel";
import FromTheBlog from "../../../components/shared/FromTheBlog";
import FeaturedPost from "../../../components/shared/FeaturedPost";

const BirthStoriesPage = () => (
  <Layout>
    <SEO title="Birth Stories" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Birth Stories" />
    </div>
    <FeaturedPost />
    <FromTheBlog title="Recent Posts" />
  </Layout>
);

export default BirthStoriesPage;
