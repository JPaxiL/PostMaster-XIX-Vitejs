import React from "react";
import "./SectionLocation.css";
import auditorio from "../../assets/img/place/auditorio_1.jpg";

const SectionLocation = () => {
  return (
    <section className="section-lugar" id="lugar">
      <div className="locale flx-a-c">
        <div className="locale__img">
          <img src={auditorio} alt="auditorio" />
        </div>
        <div className="locale__info">
          <h2 className="locale__title">Auditorio de contabilidad</h2>
          <p className="locale__location">
            <span></span>Av. San Martín S/N
            <br />
            Universidad Nacional Jorge Basadre Grohmann
          </p>
          <p className="locale__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo
            non voluptatum esse aperiam porro doloremque repudiandae distinctio
            similique itaque at ad dicta iste corporis ipsa ex perspiciatis.
            Repudiandae, eaque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionLocation;
