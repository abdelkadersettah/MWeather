import React from "react";
import LogoImg from "../../assets/images/logo/logo.png";
import "./Logo.scss";

export const Logo: React.FC = () => {
  return (
    <a href="/" className="logo">
      <img className="logo__img" src={LogoImg} alt="Mweather logo" />
      <span className="logo__name">MWeather</span>
    </a>
  );
};
