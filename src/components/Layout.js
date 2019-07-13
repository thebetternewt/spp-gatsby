import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import "./layout.css";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu/Menu";

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  /* display: flex;
  flex-direction: column; */

  .menu-wrapper {
  }

  @media (min-width: 1200px) {
    /* flex-direction: row; */

    .content {
      width: calc(100vw - 300px);
    }

    .menu-wrapper {
      width: 300px;
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GlobalStyle />
      <div className="content">
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* <Navbar /> */}
        <div
          style={{
            margin: `0 auto`,
            width: `100%`,
            // maxWidth: 960,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
      <div className="menu-wrapper">
        <Menu />
      </div>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
