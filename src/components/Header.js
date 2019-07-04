import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = ({ siteTitle, className }) => {
  console.log(className);
  return (
    <header className={className}>
      <div className="container">
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default styled(Header)`
  background: #eee;

  .container {
    padding: 1rem 0;
  }

  h1 {
    font-family: "Somersette", sans-serif;
    color: #555;
    padding: 0 1rem;
    font-weight: normal;

    a {
      color: inherit;
      text-decoration: none;
    }

    @media screen and (min-width: 700px) {
      font-size: 6rem;
      padding: 2rem 0;
      text-align: center;
    }
  }
`;
