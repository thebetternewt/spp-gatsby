import React from "react";
import styled from "styled-components";

import leaves from "../../images/leaves.jpg";
import msMag from "../../images/ms-mag-logo.png";

const AsSeenIn = styled.section`
  background-image: url(${leaves});
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.8;
  }

  .content {
    z-index: 1;

    h2 {
      font-family: "Playfair Display", serif;
      font-weight: normal;
      font-style: italic;
      color: #555;
      text-align: center;
    }

    .logos {
      display: flex;
      justify-content: space-around;
      z-index: 4;

      img {
        opacity: 0.8;
        width: 180px;
        filter: opacity(0.8) drop-shadow(0 0 0 #333);
      }
    }
  }
`;

export default () => (
  <AsSeenIn>
    <div className="overlay" />
    <div className="content">
      <h2>As Seen In</h2>
      <div className="logos">
        <img src={msMag} alt="Mississippi Magazine" />
      </div>
    </div>
  </AsSeenIn>
);
