import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import flowers from "../../images/flowers.jpg";

const Welcome = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 10px;
  margin-top: 6rem;
  position: relative;

  background-image: url(${flowers});

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.5;
  }

  .wrapper {
    width: 960px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 3rem 1rem;
    z-index: 1;

    .img-content {
      display: flex;
      justify-content: center;
    }

    .text-content {
      margin-top: 2rem;
      padding: 1rem;
      width: 100%;
      max-width: 360px;
      opacity: 0.8;
      font-size: 0.9rem;

      h2 {
        text-align: center;
        font-family: "Playfair Display", serif;
        font-weight: normal;
        /* text-transform: uppercase; */
        font-variant: small-caps;
        letter-spacing: 0.2ch;
        line-height: 1.3em;
        font-size: 1.7rem;
      }

      button {
        height: 50px;
        width: 200px;
        background-color: #a6b3ba;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;

        font-family: "Playfair Display", serif;
        letter-spacing: 0.2ch;
        font-weight: normal;
        text-transform: uppercase;
      }
    }

    .headshot {
      width: 360px;
      height: 360px;
    }

    @media screen and (min-width: 700px) {
      flex-direction: row;
      align-items: center;
      width: 960px;

      .img-content,
      .text-content {
        flex-basis: 50%;
      }

      .text-content {
        margin-top: 0;

        h2 {
          text-align: left;
        }
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      sarah: file(relativePath: { eq: "sarah-headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Welcome>
      <div className="overlay" />
      <div className="wrapper">
        <div className="img-content">
          <Img
            fluid={data.sarah.childImageSharp.fluid}
            alt="Sarah Pearson"
            className="headshot"
          />
        </div>
        <div className="text-content">
          <h2>Hello and Welcome</h2>
          <p>
            I was born and raised in Nashville, TN, but I now call Mississippi
            my home. My hubby and I both speak Spanish, and love doing pretty
            much everything together--music, home remodeling projects, coffee
            dates, grocery shopping, etc.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </Welcome>
  );
};
