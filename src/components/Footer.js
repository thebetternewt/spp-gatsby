import React from "react";
import { Link } from "gatsby";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import Instagram from "./shared/Instagram";

const Footer = styled.footer`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 0;
  opacity: 0.9;

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    margin: 5px 0;
  }

  h2 {
    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    line-height: 1.3em;
    font-size: 1.6rem;
  }

  .social-links {
    padding: 1rem 0 0;
    font-size: 1.5rem;

    svg {
      margin: 0 0.5rem;
    }
  }

  .row {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }

  .col {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:not(:first-of-type) {
      border: none;
    }
  }

  .col-1 {
    flex-basis: 25%;
  }

  .col-2 {
    flex-basis: 50%;
  }

  .business-info {
    padding: 2rem 0;

    p {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      &:first-of-type {
        margin-top: 2rem;
      }
    }
  }

  .copyright {
    opacity: 0.7;
    font-size: 0.9rem;
    text-align: center;
    padding: 1rem 0;

    p:first-of-type {
      margin: 2rem 0 1rem;
    }
  }

  @media screen and (min-width: 700px) {
    .social-links {
      padding: 1rem 0;
    }

    .row {
      flex-direction: row;
      border-top: 1px solid #ccc;
      margin-top: 4rem;
    }

    .col {
      padding: 0;
      justify-content: flex-start;

      &:not(:first-of-type) {
        border-left: 1px solid #ccc;
      }
    }
  }
`;

const InstagramWrapper = styled.div`
  position: relative;
  padding: 3rem 0 0;
`;

const FooterNav = styled.nav`
  display: flex;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }

  li {
    padding: 0;
    margin: 0 auto;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 700px) {
    margin-left: 2rem;
  }
`;

export default () => (
  <Footer>
    <div>
      <InstagramWrapper>
        <h2>Follow along on Instagram</h2>
        <Instagram />
      </InstagramWrapper>
      <div className="row">
        <div className="col col-1"></div>
        <div className="col col-2 business-info">
          <p>Sarah Pearson Photography</p>
          <p>Starkville, MS</p>
          <div className="social-links">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="col col-1">
          <FooterNav>
            <ul>
              <li>
                <Link to="/about">Sarah</Link>
              </li>
              <li>
                <Link to="/weddings">Weddings</Link>
              </li>
              <li>
                <Link to="/portraits">Portraits</Link>
              </li>
              <li>
                <Link to="/clients">For Clients</Link>
              </li>
              <li>
                <Link to="/journal">Journal</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </FooterNav>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2019 Sarah Pearson Photography</p>
        <p>Built by Relate Media & Design</p>
        <Link to="/weddings">Weddings</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  </Footer>
);
