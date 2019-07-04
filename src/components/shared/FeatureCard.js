import React from "react";
import styled from "styled-components";

const FeatureCard = styled.div`
  display: flex;
  justify-content: center;
  width: calc(260px + 6rem);
  max-width: 100%;

  .img-wrapper {
    position: relative;
    width: 300px;
    height: 200px;
    background: #ddd;

    margin: 1rem 0 4rem;
  }

  .img {
  }

  .label {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 50%, 0);
    height: 50px;
    width: 200px;
    background-color: #a6b3ba;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Playfair Display", serif;
    font-size: 1.3rem;
    letter-spacing: 0.2ch;
    font-weight: normal;
    font-style: italic;
    /* text-transform: uppercase; */
  }
`;

export default ({ title }) => {
  return (
    <FeatureCard>
      <div className="img-wrapper">
        {/* <Img
          fluid={data.weddings.childImageSharp.fluid}
          alt="Bride and groom in front of lake"
          className="img"
        /> */}
        <img src="" alt="" />
        <div className="label">{title}</div>
      </div>
    </FeatureCard>
  );
};
