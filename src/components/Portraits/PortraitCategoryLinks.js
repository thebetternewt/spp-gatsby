import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import FeaturedCardRow from "../shared/FeaturedCardRow";
import FeatureCard from "../shared/FeatureCard";

const FeaturedGalleries = styled.section`
  padding: 8rem 10px 2rem;
  max-width: 1200px;
  margin: 0 auto;

  p {
    font-family: "Playfair Display", serif;
    font-style: italic;
    font-weight: normal;
    text-align: center;
    margin: 0 1rem 2rem;
  }
`;

export default () => (
  <FeaturedGalleries>
    <p>
      From expecting your child’s arrival to the day they leave the nest, time
      flies by...but your memories don’t have to.
    </p>
    <FeaturedCardRow>
      <FeatureCard title="Motherhood" href="/portraits/motherhood" />
      <FeatureCard title="Families" href="/portraits/families" />
      <FeatureCard title="Seniors" href="/portraits/seniors" />
    </FeaturedCardRow>
  </FeaturedGalleries>
);
