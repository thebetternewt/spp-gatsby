import React from "react";
import styled from "styled-components";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Investment = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 10px;
  position: relative;

  h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    font-size: 2rem;
    margin-bottom: 0.5em;

    span {
      display: block;
      font-family: "Playfair Display", serif;
      font-weight: normal;
      font-style: italic;
      text-transform: lowercase;
      margin-bottom: 0.5em;
      font-size: 1.1rem;
      letter-spacing: 0.1ch;
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      sunset: file(relativePath: { eq: "sunset.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Investment>
      <h2>
        <span>The Wedding</span>Investment
      </h2>
      <Img
        fluid={data.sunset.childImageSharp.fluid}
        alt="Couple kissing in sunset"
        className="investment-img"
      />
    </Investment>
  );
};
