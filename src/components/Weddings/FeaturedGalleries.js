import React from "react";
import styled from "styled-components";
import FeaturedCardRow from "../shared/FeaturedCardRow";
import FeatureCard from "../shared/FeatureCard";

const FeaturedGalleries = styled.section`
  padding: 8rem 0 2rem;
  max-width: 960px;
  margin: 0 auto;

  h2 {
    font-family: "Playfair Display", serif;
    font-style: italic;
    text-transform: lowercase;
    font-weight: normal;
    text-align: center;
  }
`;

export default () => (
  <FeaturedGalleries>
    <h2>Featured Galleries</h2>
    <FeaturedCardRow>
      <FeatureCard title="feature 1" />
      <FeatureCard title="feature 2" />
      <FeatureCard title="feature 3" />
    </FeaturedCardRow>
  </FeaturedGalleries>
);
