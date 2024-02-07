/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ text }) => (
  <a css={styles} href="#/" className="btn">
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  background: #C81010;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  padding: 12px 14px;
  transition: background 500ms ease-in-out;
  &:hover {
    background: #C81010;
  }
`;

export default Button;
