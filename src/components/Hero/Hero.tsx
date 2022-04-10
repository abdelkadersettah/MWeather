import React from "react";
import "./Hero.scss";
import Logo from "../Logo/Logo";
import Countries from "../Countries/Countries";
import MyWeather from "../MyWeather/MyWeather";

type Props = {};

const Hero: React.FC = (props: Props) => {
  return (
    <div className="hero">
      <Logo />
      <Countries />
      <MyWeather />
    </div>
  );
};

export default Hero;
