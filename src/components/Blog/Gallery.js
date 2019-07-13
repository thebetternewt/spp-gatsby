import styled from "styled-components";

const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 200px);
  padding: 10px;
  grid-auto-flow: row;

  /* grid-template-columns: repeat(3, 30%); */

  .img-wrapper {
    overflow: hidden;
    cursor: pointer;

    &:nth-of-type(1) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &:nth-of-type(2) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 4;
    }
    &:nth-of-type(3) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 6;
    }
    &:nth-of-type(4) {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;
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
