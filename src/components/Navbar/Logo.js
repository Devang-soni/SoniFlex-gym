/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Logo = () => (
  <h2 css={styles}>
    STRENGTH <span>PALACE</span>
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  span {
    color: #C81010;
  }
`;

export default Logo;
