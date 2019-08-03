import React from "react";
import styled from "styled-components";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";

import FeaturedCardRow from "./FeaturedCardRow";
import FeatureCard from "./FeatureCard";

const FeaturedPost = styled.div`
  padding: 8rem 1rem 2rem;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Playfair Display", serif;
    font-style: italic;
    text-transform: lowercase;
    font-weight: normal;
    text-align: center;
    opacity: 0.6;
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }

  .date {
    font-family: "Playfair Display", serif;
    font-style: italic;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2em;
  }

  .snippet {
    font-size: 0.9rem;
  }

  .read-more {
    display: flex;
    margin-left: auto;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    font-family: "Lora", serif;
    font-size: 1.1rem;
    text-decoration: none;
    align-items: center;
    color: #817c79;
    vertical-align: middle;
    margin-top: 1rem;
  }
`;

export default ({ sectionTitle = "Featured Post", post }) => {
  console.log("post:", post);
  return (
    <FeaturedPost>
      <h2>{sectionTitle}</h2>
      <FeaturedCardRow>
        <FeatureCard
          title="June 19, 2019"
          imgFluid={post.mainImage.asset.fluid}
        />
      </FeaturedCardRow>
      <p className="date">{post.title}</p>

      <div className="snippet">
        <BlockContent blocks={post._rawBody} />
      </div>

      <Link to={`/blog/${post.slug.current}`} className="read-more">
        Read More <FaCaretRight size="24px" style={{ marginLeft: 5 }} />
      </Link>
    </FeaturedPost>
  );
};
