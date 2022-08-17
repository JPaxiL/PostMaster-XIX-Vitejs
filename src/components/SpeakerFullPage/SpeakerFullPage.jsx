import React, { useState, useEffect } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import "./SpeakerFullPage.css";

const SpeakerFullPage = ({ datos }) => {
  const [modal, setModal] = useState(false);
  const presence = (e) => {
    e.preventDefault();
    modal ? setModal(false) : setModal(true);
  };
  return (
    <FullpageSection>
      <div style={{ position: "relative" }}>
        <div className="speaker-full-wrapper section-xl flx-ja-cc">
          <div className="speaker-full flx-ja-cc">
            <div className="speaker-full__img">
              <img src={datos.foto} alt="" />
              <div className="speaker-full__shadow"></div>
            </div>
            <div className="speaker-full__info">
              <h2 className="speaker-full__name">{datos.name}</h2>
              <h3 className="speaker-full__title">{`<${datos.title}>`}</h3>
              <div className="speaker-full__description-wrapper">
                <p className="speaker-full__description">{datos.description}</p>
              </div>
            </div>
          </div>
          <div className="speaker-full__presence">
              <button onClick={presence}>Asistencia</button>
            </div>
        </div>
        {/* modal */}
        <div
          className={`day-schedule__mblur ${
            modal ? "day-schedule__mblur-active" : ""
          }`}
        >
          <div className="day-schedule__modal flx-ja-cc">
            <form className="modal__presence">
              <div className="login__item">
                <label className="login__label" htmlFor="text">
                  Ingrese el codigo
                </label>
                <input
                  className="login__input"
                  type="text"
                  name="text"
                  id="text"
                  autoComplete="off"
                />
              </div>
              <div className="modal__buttons">
                <div className="modal__button">
                  <input
                    className="modal__button"
                    type="submit"
                    value="Aceptar"
                    onClick={presence}
                  ></input>
                </div>
                <div
                  className="modal__button modal__button--cancelar"
                  onClick={presence}
                >
                  Cancelar
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FullpageSection>
  );
};

export default SpeakerFullPage;
