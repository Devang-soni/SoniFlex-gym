/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const GymSubtitle = () => (
  <p css={styles}>
    It was popularised in the 1960s with the release of Letraset sheets containing.
    <br />
    Lorem Ipsum passages, and more recently with desktop.
  </p>
);

const styles = css`
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.7;
  @media (max-width: 700px) {
    padding: 0 40px;
    br {
      display: none;
    }
  }
`;

export default GymSubtitle;
