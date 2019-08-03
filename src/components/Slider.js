import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import brideWindow from "../images/bride-window-short.jpg";

const Slider = styled.div`
  width: 100%;
  height: 425px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
`;

export default ({ fluid, imgSrc, alt }) => {
  console.log(fluid, imgSrc, alt);
  let img;

  if (imgSrc) {
    img = <img src={imgSrc} alt={alt} />;
  } else if (fluid) {
    img = <Img fluid={fluid} alt={alt} style={{ width: "100%" }} />;
  } else {
    img = <img src={brideWindow} alt="Bride looking out window" />;
  }

  return <Slider>{img}</Slider>;
};
