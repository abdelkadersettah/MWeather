import React from "react";
import "./Hero.scss";
import Logo from "../Logo";
import Countries from "../Countries";
import MyWeather from "../MyWeather";

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Logo />
      <Countries />
      <MyWeather />
    </div>
  );
};
