import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.article`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;

  border-top: 1px solid #eee;

  &:last-of-type {
    border-bottom: 1px solid #eee;
  }
`;

const ThumbImageWrapper = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: #ccc;

  .thumb-image {
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  width: calc(100% - 100px);
  flex-grow: 1;
  padding: 1rem 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-family: "Lora", serif;
    font-size: 1.1rem;
    letter-spacing: 0.1ch;
    font-weight: normal;
    margin: 0 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    font-family: "Playfair Display", serif;
    font-size: 0.9rem;
    letter-spacing: 0.1ch;
    font-weight: normal;
    font-style: italic;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BlogPostWidget = ({ post, img, alt }) => (
  <Wrapper>
    <ThumbImageWrapper>
      <img src={img} alt={alt} className="thumb-image" />
    </ThumbImageWrapper>
    <ContentWrapper>
      <h3 className="title">A Sample Post Title gsdafsdffff</h3>
      <p className="date">July 12, 2019</p>
    </ContentWrapper>
  </Wrapper>
);

export default BlogPostWidget;
