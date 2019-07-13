import React from "react";
import styled from "styled-components";

import BlogPostWidget from "./BlogPostWidget";
import baby from "../../images/baby.jpg";
import sunset from "../../images/sunset.jpg";

const FromTheBlog = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 10px;
  position: relative;

  color: #777;

  h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: normal;
    font-style: italic;
    letter-spacing: 0.1ch;
    font-size: 1.6rem;
    margin-bottom: 1em;
  }
`;

export default () => {
  return (
    <FromTheBlog>
      <h2>From the Blog</h2>
      <BlogPostWidget img={baby} alt="baby" />
      <BlogPostWidget img={sunset} alt="sunset" />
      <BlogPostWidget img={baby} alt="baby" />
      <BlogPostWidget img={sunset} alt="sunset" />
    </FromTheBlog>
  );
};
