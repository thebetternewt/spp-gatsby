import React from "react";

import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import Slider from "../../components/Slider";
import PageLabel from "../../components/shared/PageLabel";
import PortraitCategoryLinks from "../../components/Portraits/PortraitCategoryLinks";
import Testimonials from "../../components/shared/Testimonials";
import Experience from "../../components/Portraits/Experience";
import Investment from "../../components/Portraits/Investment";
import ReadyToBook from "../../components/shared/ReadyToBook";
import FromTheBlog from "../../components/shared/FromTheBlog";

const PortraitsPage = () => (
  <Layout>
    <SEO title="Portraits" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Portraits" />
    </div>
    <PortraitCategoryLinks />
    <Testimonials />
    <Experience />
    <Investment />
    <ReadyToBook />
    <FromTheBlog />
  </Layout>
);

export default PortraitsPage;
