import React from "react";
import { palette } from "../styles/palette";

export default function Footer() {
  return (
    <div className="footer-container">
      <small
        style={{
          color: palette.rocketMetallic,
        }}
        className="footer-content"
      >
        v0.5 &#169;2021 Austin Jones
      </small>
    </div>
  );
}
