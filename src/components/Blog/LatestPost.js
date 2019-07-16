import React from "react";
import styled from "styled-components";
import FeaturedCardRow from "../shared/FeaturedCardRow";
import FeatureCard from "../shared/FeatureCard";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "gatsby";

const LatestPost = styled.div`
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

export default () => {
  return (
    <LatestPost>
      <h2>Latest Post</h2>
      <FeaturedCardRow>
        <FeatureCard title="Post Title" />
      </FeaturedCardRow>
      <p className="date">June 21, 2019</p>

      <div className="snippet">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad
          molestias odit laborum hic quas porro, nihil veritatis tempore magni
          harum inventore reiciendis deserunt dolor culpa nostrum atque
          reprehenderit ipsum! Officiis rerum, suscipit maxime voluptate dolor
          autem voluptatibus enim? Animi, ipsam! Tempora rerum nam quia mollitia
          reprehenderit consequuntur neque iste!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          ea architecto eveniet accusamus magnam nihil repudiandae, doloribus
          consectetur! Vitae, possimus corrupti ab natus repellat, tempore,
          voluptate nisi reiciendis sapiente hic itaque sequi? In autem nam
          asperiores reiciendis obcaecati aspernatur, rerum excepturi. Maiores
          exercitationem esse velit quisquam? Repellendus dignissimos iste
          voluptatem.
        </p>
      </div>

      <Link to="/example-post" className="read-more">
        Read More <FaCaretRight size="24px" style={{ marginLeft: 5 }} />
      </Link>
    </LatestPost>
  );
};
