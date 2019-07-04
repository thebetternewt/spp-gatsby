import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Work = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 10px;

  h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    line-height: 1.3em;
    font-size: 2.5rem;
  }

  p {
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    text-align: center;
    font-size: 0.9rem;
  }

  .category-links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media screen and (min-width: 700px) {
      flex-direction: row;
    }
  }

  .category-link {
    border: 1px solid #ccc;
    padding: 3rem 0 4rem;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    width: calc(260px + 6rem);
    max-width: 100%;

    .cat-img-wrapper {
      position: relative;
    }

    .cat-img {
      width: 260px;
      height: 260px;
    }

    .cat-label {
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
      text-transform: uppercase;
    }

    @media screen and (min-width: 700px) {
      width: calc(340px + 6rem);

      .cat-img {
        width: 340px;
        height: 340px;
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      portraits: file(relativePath: { eq: "baby.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      weddings: file(relativePath: { eq: "bride-groom-lake.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Work>
      <h2>For Every Season</h2>
      <p>
        We love capturing every season of life. From expecting a child,
        graduating from school, getting married, and beyond, we are here to
        preserve your fondest memories through photography.
      </p>
      <div className="category-links">
        <div className="category-link">
          <div className="cat-img-wrapper">
            <Img
              fluid={data.portraits.childImageSharp.fluid}
              alt="Baby with blue eyes"
              className="cat-img"
            />
            <div className="cat-label">Portraits</div>
          </div>
        </div>
        <div className="category-link">
          <div className="cat-img-wrapper">
            <Img
              fluid={data.weddings.childImageSharp.fluid}
              alt="Bride and groom in front of lake"
              className="cat-img"
            />
            <div className="cat-label">Weddings</div>
          </div>
        </div>
      </div>
    </Work>
  );
};
