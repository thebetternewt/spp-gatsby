import styled from "styled-components";

const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, auto);
  padding: 10px;
  grid-auto-flow: dense;

  @media (min-width: 900px) {
    grid-auto-rows: 200px;
  }

  .img-wrapper {
    overflow: hidden;
    cursor: pointer;
    grid-column: span 4;
    grid-row: auto;

    @media (min-width: 900px) {
      grid-column: span 2;

      &:nth-of-type(1n) {
        grid-row: span 2;
      }
      &:nth-of-type(2n) {
        grid-row: span 3;
      }
      &:nth-of-type(3n) {
        grid-row: span 3;
      }
      &:nth-of-type(4n) {
        grid-row: span 2;
      }
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
