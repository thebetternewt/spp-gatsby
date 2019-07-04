import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Instagram = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 2.5rem;
    text-align: center;
    line-height: 1em;
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    flex-wrap: wrap;
    /* flex-direction: column-reverse; */
    p {
      /* margin-bottom: 0.7rem; */
    }
  }
`;

const InstaLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  .smallImage {
    display: none;
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    .smallImage {
      display: block;
    }
    .largeImage {
      display: none;
    }
  }
`;

export default () => {
  const data = useStaticQuery(INSTAGRAM_QUERY);

  console.log("insta data:", data);

  const images = data.allInstaNode.edges.map(({ node }) => {
    return (
      <a
        key={node.id}
        href="https://www.instagram.com/sarahpearsonphoto/"
        target="_blank"
        rel="noreferrer noopener"
        className="largeImage"
      >
        <Img
          fixed={node.localFile.childImageSharp.fixed}
          style={{
            margin: "0 3px",
            width: 140,
            height: 140,
          }}
        />
      </a>
    );
  });

  const smallImages = data.allInstaNode.edges.map(({ node }) => {
    return (
      <a
        key={node.id}
        href="https://www.instagram.com/sarahpearsonphoto/"
        target="_blank"
        rel="noreferrer noopener"
        className="smallImage"
      >
        <Img
          fixed={node.localFile.childImageSharp.fixed}
          style={{
            margin: "0 3px",
            width: 110,
            height: 110,
            maxWidth: "100%",
          }}
        />
      </a>
    );
  });

  return (
    <Instagram>
      <InstaLinkContainer>
        {images}
        {smallImages}
      </InstaLinkContainer>
    </Instagram>
  );
};

const INSTAGRAM_QUERY = graphql`
  query InstagramQuery {
    allInstaNode(limit: 6) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fixed(width: 400, height: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
