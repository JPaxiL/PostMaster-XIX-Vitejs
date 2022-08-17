import React, { useEffect, useRef } from "react";
import "./SectionSchedule.css";
import svgBg from "../../assets/img/background/hero-glow.svg";

// function getViewPortWidth() {
//   let viewportwidth;
// if (typeof window.innerWidth != 'undefined') {
//   viewportwidth = window.innerWidth;
// } else if (typeof document.documentElement != 'undefined'   && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
//   viewportwidth = document.documentElement.clientWidth;
// } else {
//      viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
// }
//   console.log(viewportwidth)
//   if(viewportwidth<=640){
//       return 59;
//   }else{
//       return 69;
//   }
// }
const SectionSchedule = () => {
  let objAgenda = [
    { id:1, hour: "07:00", event: "Inaguración del evento" },
    {
      id:2,
      hour: "08:30",
      event: "Ponencia: Building Data Driven Companies",
    },
    {
      id:3,
      hour: "10:00",
      event: "Ponencia: Building Data Driven ",
    },
    { id:4, hour: "12:00", event: "Break" },
    {
      id:5,
      hour: "14:30",
      event: "Ponencia: Building Data Driven Companies",
    },
    {
      id:6,
      hour: "16:00",
      event: "Ponencia: Building Data Driven Companies",
    },
    { id:7, hour: "17:00", event: "Clausura" },
  ];

  //
  return (
    <section className="section-agenda flx-j-c" id="agenda">
      <img className="agenda__svg-bg" src={svgBg} alt="svg" />
      <div className="title-section flx-j-c title-section--gapmin">
        <h2 className="title-section__h2 title-section__h2--white">
          La Agenda
        </h2>
        <p className="title-section__p">
          <span className="lined"></span>SEPTIEMBRE 02
        </p>
      </div>
      <div className="agenda">
        <pre className="agenda__consulta">mysql&gt; SELECT * FROM agenda</pre>
        <div className="agenda__container">
          {objAgenda.map((item) => {
            let maxLetter = 69;
            let lineSeparator = "+ ";
            for (let i = 0; i < maxLetter / 2 - 2; i++) {
              lineSeparator += "- ";
            }
            lineSeparator += "+";
            return (
              <React.Fragment key={item.id}>
                <div className="agenda__border flx-a-c">
                  <span className="mas" style={{ paddingRight: ".5rem" }}>
                    +
                  </span>
                  <span className="dashed">
                    <span className="dashed dashed2"></span>
                  </span>
                  <span className="mas" style={{ paddingLeft: ".5rem" }}>
                    +
                  </span>
                </div>
                <div className="agenda__ponencia flx-a-c">
                  <div className=" flx-a-c" style={{ flexGrow: "1" }}>
                    <span className="agenda__line-start"></span>
                    <span className="agenda__data flx-a-c">{item.hour}</span>
                    <span className="agenda__separator"></span>
                    <span className="agenda__data agenda__data--event flx-a-c">
                      {item.event}
                    </span>
                  </div>
                  <span className="agenda__line-end"></span>
                </div>
                <div className="agenda__border flx-a-c">
                  <span className="mas" style={{ paddingRight: ".5rem" }}>
                    +
                  </span>
                  <span className="dashed">
                    <span className="dashed dashed2"></span>
                  </span>
                  <span className="mas" style={{ paddingLeft: ".5rem" }}>
                    +
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="evento-info flx-a-c section-l">
        <div className="evento-info__container flx-a-c">
          <div className="evento-info__data">
            <span id="dia">01</span>
            DÍA
          </div>
          <div className="evento-info__data">
            <span id="ponentes">04</span>
            PONENTES
          </div>
          <div className="evento-info__data">
            <span id="asistentes">200</span>
            ASISTENTES
          </div>
          <div className="evento-info__data">
            <span id="espectadores">&#8734;</span>
            ESPECTADORES
          </div>
        </div>
        <div className="main-nav__item">
          <a
            className="main-nav__link main-nav__link--inscrip flx-a-c"
            href="./#contactanos"
          >
            Pre-inscripción
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionSchedule;
