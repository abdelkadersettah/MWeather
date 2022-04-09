import React from "react";
import "./Hero.scss";
import Logo from "../Logo/Logo";
import Countries from "../Countries/Countries";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero">
      <Logo />
      <Countries />
    </div>
  );
};

export default Hero;
