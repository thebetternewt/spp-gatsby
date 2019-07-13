import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import Divider from "../shared/Divider";
import leaves from "../../images/leaves.jpg";
import sunset from "../../images/sunset.jpg";

const Welcome = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 10px;
  position: relative;

  background-image: url(${leaves});

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
    height: 500px;
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 1;

    .img-content {
      display: none;
      width: 50%;
      height: 100%;
      overflow: hidden;

      .feature-img {
        height: 100%;
      }

      @media screen and (min-width: 700px) {
        display: flex;
        justify-content: center;
      }
    }

    .text-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem;
      width: 100%;
      max-width: 360px;
      margin: 0 auto;
      opacity: 0.8;
      font-size: 0.9rem;

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

      h4 {
        text-align: center;
        font-family: "Playfair Display", serif;
        font-weight: normal;
        font-variant: small-caps;
        letter-spacing: 0.2ch;
        line-height: 1.3em;
        font-size: 1.7rem;
        margin-top: 0.7em;
      }

      p {
        font-style: italic;
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

    @media screen and (min-width: 700px) {
      flex-direction: row;
      align-items: center;
      width: 960px;
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      sunset: file(relativePath: { eq: "sunset.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
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
          <img
            src={sunset}
            alt="Couple kissing in sunset"
            className="feature-img"
          />
        </div>
        <div className="text-content">
          <h2>
            <span>The Portrait</span>Experience
          </h2>
          <Divider />
          <h4>Let's Chat</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptatibus sequi inventore deserunt fugiat fugit voluptatem
            cupiditate? Voluptates laudantium eum explicabo quo illo accusamus
            nemo maxime vitae quos illum fuga molestias nulla ipsa dicta
            repellat quis cum, necessitatibus nostrum iste.
          </p>
          <button>Next</button>
        </div>
      </div>
    </Welcome>
  );
};
