import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Slider from "../components/Slider";
import PageLabel from "../components/shared/PageLabel";
import FromTheBlog from "../components/shared/FromTheBlog";
import BlogPost from "../templates/BlogPost";
import Gallery from "../components/Blog/Gallery";
import baby from "../images/baby.jpg";
import sunset from "../images/sunset.jpg";
import bride from "../images/bride-window.jpg";
import flowers from "../images/flowers.jpg";

const JournalPage = () => (
  <Layout>
    <SEO title="Example Post" />
    <div style={{ position: "relative" }}>
      <Slider />
      <PageLabel lead="June 21, 2019" title="Example Post" />
    </div>

    <BlogPost>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad
        molestias odit laborum hic quas porro, nihil veritatis tempore magni
        harum inventore reiciendis deserunt dolor culpa nostrum atque
        reprehenderit ipsum! Officiis rerum, suscipit maxime voluptate dolor
        autem voluptatibus enim? Animi, ipsam! Tempora rerum nam quia mollitia
        reprehenderit consequuntur neque iste!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ea
        architecto eveniet accusamus magnam nihil repudiandae, doloribus
        consectetur! Vitae, possimus corrupti ab natus repellat, tempore,
        voluptate nisi reiciendis sapiente hic itaque sequi? In autem nam
        asperiores reiciendis obcaecati aspernatur, rerum excepturi. Maiores
        exercitationem esse velit quisquam? Repellendus dignissimos iste
        voluptatem.
      </p>
    </BlogPost>
    <Gallery>
      <div className="img-wrapper">
        <img src={baby} alt="baby" />
      </div>
      <div className="img-wrapper">
        <img src={bride} alt="bride" />
      </div>
      <div className="img-wrapper">
        <img src={sunset} alt="sunset" />
      </div>
      <div className="img-wrapper">
        <img src={flowers} alt="flowers" />
      </div>
      <div className="img-wrapper">
        <img src={baby} alt="baby" />
      </div>
      <div className="img-wrapper">
        <img src={bride} alt="bride" />
      </div>
      <div className="img-wrapper">
        <img src={sunset} alt="sunset" />
      </div>
      <div className="img-wrapper">
        <img src={flowers} alt="flowers" />
      </div>
      <div className="img-wrapper">
        <img src={baby} alt="baby" />
      </div>
      <div className="img-wrapper">
        <img src={bride} alt="bride" />
      </div>
      <div className="img-wrapper">
        <img src={sunset} alt="sunset" />
      </div>
      <div className="img-wrapper">
        <img src={flowers} alt="flowers" />
      </div>
    </Gallery>
    <FromTheBlog title="Related Posts" />
  </Layout>
);

export default JournalPage;
