import React from "react";
import { graphql } from "gatsby";

import Layout from "../../../components/Layout";
import SEO from "../../../components/Seo";
import Slider from "../../../components/Slider";
import PageLabel from "../../../components/shared/PageLabel";
import FromTheBlog from "../../../components/shared/FromTheBlog";
import FeaturedPost from "../../../components/shared/FeaturedPost";

import headerImg from "../../../images/newborn-header.jpg";

const NewbornPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <SEO title="Newborn" />
      <div style={{ position: "relative" }}>
        <Slider
          fluid={data.mainImage.childImageSharp.fluid}
          alt="Sarah Person Photography - Newborn"
        />
        <PageLabel lead="Sarah Pearson" title="Newborn" />
      </div>
      <FeaturedPost post={data.sanityNewbornPage.featuredPost} />
      <FromTheBlog title="Recent Posts" />
    </Layout>
  );
};

export default NewbornPage;

export const query = graphql`
  query {
    mainImage: file(relativePath: { eq: "newborn-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityNewbornPage {
      featuredPost {
        slug {
          current
        }
        title
        category
        _rawBody
        mainImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        # largeImage: mainImage {
        #   asset {
        #     fluid(maxWidth: 1600) {
        #       ...GatsbySanityImageFluid
        #     }
        #   }
        # }
      }
    }
  }
`;
