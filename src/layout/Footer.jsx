import React from "react";
import { Container } from "react-bootstrap";
import { palette } from "../palette";

export default function Footer() {
  return (
    <small
      style={{
        color: palette.rocketMetallic,
      }}
      className=".footer-content"
    >
      v0.15 &#169;2021 Austin Jones
    </small>
  );
}
