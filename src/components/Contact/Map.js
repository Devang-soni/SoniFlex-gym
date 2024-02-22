/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    {/* <iframe
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=Av.%20L%C3%BAcio%20Costa&t=&z=13&ie=UTF8&iwloc=&output=embed"
      
    ></iframe> */}

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358.4366099624645!2d72.84254340026921!3d19.185586419068464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7004317a6bb%3A0x3da67b8625085d99!2sSoniflex%20Gym!5e1!3m2!1sen!2sin!4v1708590628392!5m2!1sen!2sin" 
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
