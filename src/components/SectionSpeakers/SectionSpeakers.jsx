import React from 'react';

import iconFacebook from '../../assets/img/icons/icon-facebook-purple.svg';
import iconTwitter from '../../assets/img/icons/icon-twitter-purple.svg';
import iconLinkedin from '../../assets/img/icons/icon-linkedin-purple.svg';

import './SectionSpeakers.css';

class SectionSpeakers extends React.Component {
  state = {
    ponentes: [],
    status: false,
    errorMessage: '',
  };
  componentDidMount() {
    const headers = {
      Authorization: global.AUTHZ,
    };
    // GET request using fetch with error handling
    fetch(global.URL + 'ponente', { headers })
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusCode
          const error = (data && data.message) || response.statusCode;
          return Promise.reject(error);
        }
        this.setState({ ponentes: data, status: true });
        console.log(this.state.ponentes);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString(), status: false });
      });
  }

  render() {
    let SpeakerCards;
    if (this.state.status) {
      SpeakerCards = this.state.ponentes.map((ponente, index) => {
        return (
          <article className="ponente" key={index}>
            <div className="ponente__ocupacion">
              <div className="flx-a-c">
                {index + 1} <span></span> {ponente.especialidad}
              </div>
            </div>
            <div className="ponente__img">
              <img src={ponente.foto} alt="ponente" />
            </div>
            <div className="ponente__info">
              <h2 className="ponente__name">{ponente.fullName}</h2>
              <p className="ponente__tema">
                &lt; {ponente.tituloPonencia} &gt;
              </p>
              <p className="ponente__description">{ponente.descripcion}</p>
              <div className="ponente__redess flx-a-c">
                Redes_sociales =
                <a className="icon__s" href={ponente.facebook}>
                  <img src={iconFacebook} alt="iconFacebook" />{' '}
                </a>
                ,
                <a className="icon__s" href="./#">
                  <img src={iconTwitter} alt="iconTwitter" />{' '}
                </a>
                ,
                <a className="icon__s" href={ponente.linkedin}>
                  <img src={iconLinkedin} alt="iconLinkedin" />{' '}
                </a>
              </div>
            </div>
          </article>
        );
      });
    } else {
      SpeakerCards = (
        <div className="d-flex justify-content-center">
          <span className="spinner-grow text-dark" role="status"></span>
        </div>
      );
    }
    return (
      <section className="section-ponentes" id="ponentes">
        <div className="title-section flx-j-c">
          <h2 className="title-section__h2">Los Ponentes</h2>
          <p className="title-section__p">
            04 <span className="lined"></span> EXPERTOS DESTACADOS EN LA
            INDUSTRIA
          </p>
        </div>
        <div className="section-ponentes__cards  section-l">{SpeakerCards}</div>
      </section>
    );
  }
}
let ponentes = [];
(async () => {
  const headers = {
    Authorization: global.AUTHZ,
  };
  const response = await fetch(global.URL + 'ponente', { headers });
  ponentes = await response.json();
  //console.log(ponentes);
})();

const SectionSpeakers001 = () => {
  return (
    <section className="section-ponentes" id="ponentes">
      <div className="title-section flx-j-c">
        <h2 className="title-section__h2">Los Ponentes</h2>
        <p className="title-section__p">
          04 <span className="lined"></span> EXPERTOS DESTACADOS EN LA INDUSTRIA
        </p>
      </div>
      <div className="section-ponentes__cards  section-l">
        {ponentes.map((ponente, index) => {
          return (
            <article className="ponente" key={index}>
              <div className="ponente__ocupacion">
                <div className="flx-a-c">
                  {index + 1} <span></span> {ponente.especialidad}
                </div>
              </div>
              <div className="ponente__img">
                <img src={ponente.foto} alt="ponente" />
              </div>
              <div className="ponente__info">
                <h2 className="ponente__name">{ponente.fullName}</h2>
                <p className="ponente__tema">
                  &lt; {ponente.tituloPonencia} &gt;
                </p>
                <p className="ponente__description">{ponente.descripcion}</p>
                <div className="ponente__redess flx-a-c">
                  Redes_sociales =
                  <a className="icon__s" href={ponente.facebook}>
                    <img src={iconFacebook} alt="iconFacebook" />{' '}
                  </a>
                  ,
                  <a className="icon__s" href="./#">
                    <img src={iconTwitter} alt="iconTwitter" />{' '}
                  </a>
                  ,
                  <a className="icon__s" href={ponente.linkedin}>
                    <img src={iconLinkedin} alt="iconLinkedin" />{' '}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SectionSpeakers;
