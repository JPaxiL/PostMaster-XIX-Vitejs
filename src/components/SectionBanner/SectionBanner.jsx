import React from "react";
import "./SectionBanner.css";

import backgroundbanner from "../../assets/img/background/banner_1.jpg";
import logo from "../../assets/img/logo.png";

const SectionBanner = () => {
  return (
    <section
      className="main-banner"
      id="inicio"
      style={{ backgroundImage: `url(${backgroundbanner})` }}
    >
      <a className="main-logo" href="#">
        <img className="main-logo__img" src={logo} alt="Logo-esis-postmaster" />
      </a>
      <div className="main-title">
        <h1 className="main-title__h1">
          <div className="main-title__xix flx-a-c">
            <span>&lt; </span>
            <span>X</span>
            <span>I</span>
            <span>X</span>
            <span>&gt;</span>
          </div>
          <div className="main-title__post flx-a-c">
            <span>P</span>
            <span>O</span>
            <span>S</span>
            <span>T</span>
            <span>-</span>
            <span>M</span>
            <span>A</span>
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>R</span>
          </div>
        </h1>
        <p className="flx-a-c">
          <span className="lined"></span>"Encuentro de egresados"
        </p>
      </div>
      <div className="main-info flx-a-c">
        <div className="main-info__container  flx-a-c">
          <div className="main-info__item">SEPTIEMBRE 02</div>
          <div className="main-info__item">TACNA</div>
          <a
            href="./#contactanos"
            className="main-info__item main-info__item--preinscrip"
          >
            Pre-inscripción
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
