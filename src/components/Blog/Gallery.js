import styled from "styled-components";

const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, 200px);
  grid-auto-rows: 200px;
  padding: 10px;
  grid-auto-flow: dense;

  /* grid-template-columns: repeat(3, 30%); */

  .img-wrapper {
    overflow: hidden;
    cursor: pointer;
    grid-column: span 4;

    &:nth-of-type(1n) {
      /* grid-column: span 2; */
      grid-row: span 2;
      /* grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3; */
    }
    &:nth-of-type(2n) {
      /* grid-column: span 2; */
      grid-row: span 3;
      /* grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4; */
    }
    &:nth-of-type(3n) {
      /* grid-column: span 2; */
      grid-row: span 3;
      /* grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 6; */
    }
    &:nth-of-type(4n) {
      /* grid-column: span 2; */
      grid-row: span 2;
      /* grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6; */
    }

    @media (min-width: 900px) {
      grid-column: span 2;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* @media screen and (min-width: 800px) { */
  /* grid-auto-columns: repeat(2, 1fr); */

  /* &:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &:nth-child(3) {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }
  &:nth-child(4) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  } */
  /* } */
`;

export default Gallery;
