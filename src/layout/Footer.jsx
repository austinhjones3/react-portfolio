import React from "react";
import { palette } from "../palette";

export default function Footer() {
  return (
    <footer className="fixed-footer">
      <small
        style={{
          display: "flex",
          textAlign: "right",
          float: "right",
          color: palette.rocketMetallic,
        }}
        className=".footer-content"
      >
        v0.15 &#169;2021 Austin Jones
      </small>
    </footer>
  );
}
