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

const BlogPage = () => (
  <Layout>
    <SEO title="Journal" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="Sarah Pearson" title="Journal" />
    </div>
    <FromTheBlog title="Recent Posts" style={{ marginTop: "3rem" }} />
  </Layout>
);

export default BlogPage;
