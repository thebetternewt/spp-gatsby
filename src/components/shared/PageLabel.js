import React from "react";
import styled from "styled-components";

const LabelWrapper = ({ lead, title }) => (
  <PageLabel>
    <h1>
      <span>{lead}</span>
      {title}
    </h1>
  </PageLabel>
);

const PageLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 50%, 0);
  height: 120px;
  width: 320px;
  max-width: 90%;
  background-color: #f4e7e2;
  color: #555;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Playfair Display", serif;
    letter-spacing: 0.2ch;
    font-style: italic;
    font-weight: normal;
    text-align: center;
    margin: 0 auto;

    span {
      font-style: normal;
      text-transform: uppercase;
      display: block;
      font-size: 20px;
      margin-bottom: 0.5em;
    }
  }

  @media screen and (min-width: 700px) {
    width: 500px;
  }
`;

export default LabelWrapper;
