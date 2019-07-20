import React from "react";

import Layout from "../../../components/Layout";
import SEO from "../../../components/Seo";
import Slider from "../../../components/Slider";
import PageLabel from "../../../components/shared/PageLabel";
import FromTheBlog from "../../../components/shared/FromTheBlog";
// import FeaturedPost from "../../../components/shared/FeaturedPost";
import CategoryLinks from "../../../components/Portraits/Motherhood/CategoryLinks";

const MotherhoodPage = () => (
  <Layout>
    <SEO title="Motherhood" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Motherhood" />
    </div>
    {/* <FeaturedPost /> */}
    <CategoryLinks />
    <FromTheBlog title="Recent Posts" />
  </Layout>
);

export default MotherhoodPage;
