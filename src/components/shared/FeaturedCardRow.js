import React from "react";
import styled from "styled-components";

const FeaturedCardRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export default FeaturedCardRow;
