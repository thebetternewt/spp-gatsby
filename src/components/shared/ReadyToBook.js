import React from "react";
import styled from "styled-components";

const ReadyToBook = styled.section`
  padding: 4rem 1rem;
  text-align: center;
  background-color: #f4e7e2;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Playfair Display", serif;
    font-weight: normal;
    letter-spacing: 0.1ch;
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
`;

export default () => {
  return (
    <ReadyToBook>
      <h2>Ready to Book?</h2>
      <button>Let's Chat</button>
    </ReadyToBook>
  );
};
