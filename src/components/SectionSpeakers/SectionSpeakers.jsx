import React from 'react';

import ponente from '../../assets/img/speakers/ponente.jpg';
import iconFacebook from '../../assets/img/icons/icon-facebook-purple.svg';
import iconTwitter from '../../assets/img/icons/icon-twitter-purple.svg';
import iconLinkedin from '../../assets/img/icons/icon-linkedin-purple.svg';

import './SectionSpeakers.css';

const SectionSpeakers = () => {
  return (
    <section className="section-ponentes" id="ponentes">
      <div className="title-section flx-j-c">
        <h2 className="title-section__h2">Los Ponentes</h2>
        <p className="title-section__p">
          04 <span className="lined"></span> EXPERTOS DESTACADOS EN LA INDUSTRIA
        </p>
      </div>
      <div className="section-ponentes__cards  section-l">
        <article className="ponente">
          <div className="ponente__ocupacion">
            <div className="flx-a-c">
              01 <span></span> Analista de datos
            </div>
          </div>
          <div className="ponente__img">
            <img src={ponente} alt="ponente" />
          </div>
          <div className="ponente__info">
            <h2 className="ponente__name">Manuel Cotrado</h2>
            <p className="ponente__tema">
              &lt; Building Data Driven Companies &gt;
            </p>
            <p className="ponente__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
              architecto voluptate recusandae facere, commodi tempore eos nemo
              reprehenderit, accusantium deserunt dolore iure enim eligendi
              incidunt? Laborum beatae maiores quae?
            </p>
            <div className="ponente__redess flx-a-c">
              Redes_sociales =
              <a className="icon__s" href="./#">
                <img src={iconFacebook} alt="iconFacebook" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconTwitter} alt="iconTwitter" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconLinkedin} alt="iconLinkedin" />{' '}
              </a>
            </div>
          </div>
        </article>
        <article className="ponente">
          <div className="ponente__ocupacion">
            <div className="flx-a-c">
              01 <span></span> Analista de datos
            </div>
          </div>
          <div className="ponente__img">
            <img src={ponente} alt="ponente" />
          </div>
          <div className="ponente__info">
            <h2 className="ponente__name">Manuel Cotrado</h2>
            <p className="ponente__tema">
              &lt; Building Data Driven Companies &gt;
            </p>
            <p className="ponente__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
              architecto voluptate recusandae facere, commodi tempore eos nemo
              reprehenderit, accusantium deserunt dolore iure enim eligendi
              incidunt? Laborum beatae maiores quae?
            </p>
            <div className="ponente__redess flx-a-c">
              Redes_sociales =
              <a className="icon__s" href="./#">
                <img src={iconFacebook} alt="iconFacebook" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconTwitter} alt="iconTwitter" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconLinkedin} alt="iconLinkedin" />{' '}
              </a>
            </div>
          </div>
        </article>
        <article className="ponente">
          <div className="ponente__ocupacion">
            <div className="flx-a-c">
              01 <span></span> Analista de datos
            </div>
          </div>
          <div className="ponente__img">
            <img src={ponente} alt="ponente" />
          </div>
          <div className="ponente__info">
            <h2 className="ponente__name">Manuel Cotrado</h2>
            <p className="ponente__tema">
              &lt; Building Data Driven Companies &gt;
            </p>
            <p className="ponente__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
              architecto voluptate recusandae facere, commodi tempore eos nemo
              reprehenderit, accusantium deserunt dolore iure enim eligendi
              incidunt? Laborum beatae maiores quae?
            </p>
            <div className="ponente__redess flx-a-c">
              Redes_sociales =
              <a className="icon__s" href="./#">
                <img src={iconFacebook} alt="iconFacebook" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconTwitter} alt="iconTwitter" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconLinkedin} alt="iconLinkedin" />{' '}
              </a>
            </div>
          </div>
        </article>
        <article className="ponente">
          <div className="ponente__ocupacion">
            <div className="flx-a-c">
              01 <span></span> Analista de datos
            </div>
          </div>
          <div className="ponente__img">
            <img src={ponente} alt="ponente" />
          </div>
          <div className="ponente__info">
            <h2 className="ponente__name">Manuel Cotrado</h2>
            <p className="ponente__tema">
              &lt; Building Data Driven Companies &gt;
            </p>
            <p className="ponente__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
              architecto voluptate recusandae facere, commodi tempore eos nemo
              reprehenderit, accusantium deserunt dolore iure enim eligendi
              incidunt? Laborum beatae maiores quae?
            </p>
            <div className="ponente__redess flx-a-c">
              Redes_sociales =
              <a className="icon__s" href="./#">
                <img src={iconFacebook} alt="iconFacebook" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconTwitter} alt="iconTwitter" />{' '}
              </a>
              ,
              <a className="icon__s" href="./#">
                <img src={iconLinkedin} alt="iconLinkedin" />{' '}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SectionSpeakers;
