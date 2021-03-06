import React from "react";
import styled from "styled-components";

const Post = styled.div`
  padding: 8rem 1rem 2rem;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.9rem;
  }
`;

export default ({ children }) => <Post>{children}</Post>;
