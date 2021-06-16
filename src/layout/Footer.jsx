import React from "react";
import { palette } from "../palette";

export default function Footer() {
  return (
    <div className="footer-container">
      <small
        style={{
          color: palette.rocketMetallic,
        }}
        className="footer-content"
      >
        v0.15 &#169;2021 Austin Jones
      </small>
    </div>
  );
}
