/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// import React from "react";
import Container from "../GlobalComponents/Container";
import Form from "./Form";
import Map from "./Map";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Container>
      <Map />
      <Form />
    </Container>
    <footer>
      <p>
        Copyright &copy; 2022 SoniFlex Gym
      </p>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
  }
  footer {
    text-align: center;
    padding: 36px 0;
    background-color: #e6e0dc;
    p {
      font-size: 14px;
      color: #000;
      font-weight: bold;
      a {
        text-decoration: none;
        color: #000;
        font-weight: 500;
        &:hover {
          color: #000;
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;
