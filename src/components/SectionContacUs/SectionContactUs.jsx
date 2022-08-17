import React from "react";
import "./SectionContacUs.css"

const SectionContactUs = () => {
  return (
    <section className="section-contactanos" id="contactanos">
      <div className="wrapper-contactanos section-m">
        <div className="contactanos__title main-title">
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
          <p>
            <span className="lined"></span>"Encuentro de egresados"
          </p>
        </div>

        <div className="separacion"></div>

        <div className="contactanos__info flx-a-c">
          <div>
            <h3>¿Qué?</h3>
            <p>XIX POST-MASTER</p>
          </div>
          <div>
            <h3>¿Cúando?</h3>
            <p>September 02, 2022</p>
          </div>
          <div>
            <h3>¿Dónde?</h3>
            <p>Miraflores S/N, Tacna 23000</p>
          </div>
          <div className="main-nav__item">
            <a
              className="main-nav__link main-nav__link--inscrip"
              href="./#contactanos"
              style={{padding: '1rem'}}
            >
              Pre-inscripción
            </a>
          </div>
        </div>
        <div className="separacion"></div>
        <div className="contactanos__form">
          <h2 className="contactanos__form-title">Pre-inscripción</h2>
          <p>Para obtener más informacion, no dude en ponerse en contacto</p>
          <form action="./#" className="flx-a-c">
            <div className="inputs flx-a-c">
              <label className="inputs__label">
                <input
                  className="inputs__item"
                  id="inputName"
                  type="text"
                  name="name"
                  placeholder="* Nombre Completo"
                />
              </label>
              <label className="inputs__label">
                <input
                  className="inputs__item"
                  id="inputEmail"
                  type="email"
                  name="email"
                  placeholder="* Correo Electrónico"
                />
              </label>
              <label className="inputs__label">
                <input
                  className="inputs__item"
                  id="inputCod"
                  type="text"
                  name="cod"
                  placeholder="Código Universitario"
                />
              </label>
            </div>
            <div className="inputs flx-a-c">
              <div className="recaptcha"></div>
              <input className="enviar" type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionContactUs;
