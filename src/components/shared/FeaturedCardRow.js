import React from "react";
import styled from "styled-components";

const FeaturedCardRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export default FeaturedCardRow;
