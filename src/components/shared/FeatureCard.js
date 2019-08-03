import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { GRAY_TEAL } from "../../ui/colors";

const FeatureCard = styled.div`
  display: flex;
  justify-content: center;
  /* width: calc(260px + 6rem); */
  max-width: 500px;
  width: 100%;
  margin: 0 10px;

  .img-wrapper {
    position: relative;
    min-width: 300px;
    width: 100%;
    height: 250px;
    background: #ddd;

    margin: 1rem 0 4rem;

    .img {
      min-width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  .label {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 50%, 0);
    height: 50px;
    width: calc(100% - 100px);
    background-color: ${GRAY_TEAL};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Playfair Display", serif;
    font-size: 1.3rem;
    letter-spacing: 0.2ch;
    font-weight: normal;
    font-style: italic;
  }

  @media (min-width: 500px) {
    .img-wrapper {
      height: 300px;
    }
  }

  @media (min-width: 900px) {
    .img-wrapper {
      height: 250px;
    }
  }
`;

export default ({ title, imgFluid, imgAlt }) => (
  <FeatureCard>
    <div className="img-wrapper">
      <Img fluid={imgFluid} alt={imgAlt} className="img" />
      {/* <img src="" alt="" /> */}
      <div className="label">{title}</div>
    </div>
  </FeatureCard>
);
