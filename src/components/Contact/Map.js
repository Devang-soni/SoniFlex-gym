/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.4788654961346!2d72.84253368391795!3d19.185515541116306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6fad76eee67%3A0xe4cedb89d25480f0!2sGajanan%20Niwas%20CHSL!5e1!3m2!1sen!2sin!4v1708405581905!5m2!1sen!2sin" 

    ></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
