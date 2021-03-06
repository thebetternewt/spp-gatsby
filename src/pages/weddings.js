import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import PageLabel from "../components/shared/PageLabel";
import FeaturedGalleries from "../components/Weddings/FeaturedGalleries";
import Testimonials from "../components/shared/Testimonials";
import Experience from "../components/Weddings/Experience";
import Investment from "../components/Weddings/Investment";
import ReadyToBook from "../components/shared/ReadyToBook";
import FromTheBlog from "../components/shared/FromTheBlog";

const WeddingsPage = () => (
  <Layout>
    <SEO title="Weddings" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Weddings" />
    </div>
    <FeaturedGalleries />
    <Testimonials />
    <Experience />
    <Investment />
    <ReadyToBook />
    <FromTheBlog />
  </Layout>
);

export default WeddingsPage;
