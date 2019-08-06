import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import PageLabel from "../components/shared/PageLabel";
import FromTheBlog from "../components/shared/FromTheBlog";
import FeaturedPost from "../components/shared/FeaturedPost";

const JournalPage = ({ data }) => {
  console.log(data.latestPost);
  return (
    <Layout>
      <SEO title="Journal" />
      <div style={{ position: "relative" }}>
        <Slider />
        <PageLabel lead="Sarah Pearson" title="Journal" />
      </div>
      <FeaturedPost
        sectionTitle="Latest Post"
        post={data.latestPost.edges[0].node}
      />
      <FromTheBlog title="Recent Posts" />
    </Layout>
  );
};

export default JournalPage;

export const query = graphql`
  query JournalQuery {
    latestPost: allSanityPost(limit: 1) {
      edges {
        node {
          title
          _rawBody
          id
          slug {
            current
          }
          mainImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
