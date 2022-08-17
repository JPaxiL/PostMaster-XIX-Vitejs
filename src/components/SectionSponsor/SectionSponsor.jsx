import React from "react";

import alienware from "../../assets/img/sponsors/alienware.svg"
import asus from "../../assets/img/sponsors/asus.svg"
import msi from "../../assets/img/sponsors/msi.svg"
import nvidia from "../../assets/img/sponsors/nvidia.svg"

import "./SectionSponsor.css"

const SectionSponsor = () => {
  return (
    <section className="section-auspiciadores" id="auspiciadores">
      <div className="title-section flx-j-c title-section--gapmin">
        <h2 className="title-section__h2 title-section__h2--white">
          Nuestros Auspiciadores
        </h2>
        <p className="title-section__p title-section__p--white">
          <span className="lined lined--white"></span>LIDERES EN LA INDUSTRIA
        </p>
      </div>
      <div className="auspiciadores section-l">
        <a className="auspiciadores__link" href="#">
          <img src={alienware} alt="" />
        </a>
        <a className="auspiciadores__link" href="#">
          <img src={asus} alt="" />
        </a>
        <a className="auspiciadores__link" href="#">
          <img src={msi} alt="" />
        </a>
        <a className="auspiciadores__link" href="#">
          <img src={nvidia} alt="" />
        </a>

        <a className="auspiciadores__link" href="#">
          <img src={nvidia} alt="" />
        </a>
        <a className="auspiciadores__link" href="#">
          <img src={msi} alt="" />
        </a>
        <a className="auspiciadores__link" href="#">
          <img src={asus} alt="" />
        </a>
        <a className="auspiciadores__link" href="#">
          <img src={alienware} alt="" />
        </a>
      </div>
    </section>
  );
};

export default SectionSponsor;
