import React from "react";
import styled from "styled-components";

import brideWindow from "../images/bride-window-short.jpg";

const Slider = styled.div`
  width: 100%;
  height: 425px;
  overflow: hidden;
  position: relative;

  img {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
`;

export default () => (
  <Slider>
    <img src={brideWindow} alt="Bride looking out window" />
  </Slider>
);
