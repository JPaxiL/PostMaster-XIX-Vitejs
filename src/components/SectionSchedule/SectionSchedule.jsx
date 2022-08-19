import React, { useEffect, useRef } from 'react';
import './SectionSchedule.css';
import svgBg from '../../assets/img/background/hero-glow.svg';

class SectionSchedule extends React.Component {
  state = {
    agenda: [],
    status: false,
    errorMessage: '',
  };
  componentDidMount() {
    const headers = {
      Authorization: global.AUTHZ,
    };
    // GET request using fetch with error handling
    fetch(global.URL + 'agenda', { headers })
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusCode
          const error = (data && data.message) || response.statusCode;
          return Promise.reject(error);
        }
        this.setState({ agenda: data, status: true });
        console.log(this.state.agenda);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString(), status: false });
      });
  }
  render() {
    let Diary;
    if (this.state.status) {
      Diary = this.state.agenda.map((item) => {
        let maxLetter = 69;
        let lineSeparator = '+ ';
        for (let i = 0; i < maxLetter / 2 - 2; i++) {
          lineSeparator += '- ';
        }
        lineSeparator += '+';
        return (
          <React.Fragment key={item.id}>
            <div className="agenda__border flx-a-c">
              <span className="mas" style={{ paddingRight: '.5rem' }}>
                +
              </span>
              <span className="dashed">
                <span className="dashed dashed2"></span>
              </span>
              <span className="mas" style={{ paddingLeft: '.5rem' }}>
                +
              </span>
            </div>
            <div className="agenda__ponencia flx-a-c">
              <div className=" flx-a-c" style={{ flexGrow: '1' }}>
                <span className="agenda__line-start"></span>
                <span className="agenda__data flx-a-c">{item.horaInicio}</span>
                <span className="agenda__separator"></span>
                <span className="agenda__data agenda__data--event flx-a-c">
                  {item.nombre}
                </span>
              </div>
              <span className="agenda__line-end"></span>
            </div>
            <div className="agenda__border flx-a-c">
              <span className="mas" style={{ paddingRight: '.5rem' }}>
                +
              </span>
              <span className="dashed">
                <span className="dashed dashed2"></span>
              </span>
              <span className="mas" style={{ paddingLeft: '.5rem' }}>
                +
              </span>
            </div>
          </React.Fragment>
        );
      });
    } else {
      Diary = (
        <div className="d-flex justify-content-center">
          <span className="spinner-grow text-ligth" role="status"></span>
        </div>
      );
    }
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
          <div className="agenda__container">{Diary}</div>
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
  }
}

export default SectionSchedule;
