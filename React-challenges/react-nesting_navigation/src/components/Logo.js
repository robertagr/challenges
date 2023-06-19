import Image from "../components/Image";
import logo from "../img/logo.jpg";
import React from "react";

export default function Logo() {
  return (
    <a href="#">
      <Image className="round-image" src={logo} alt="logo" />
    </a>
  );
}
