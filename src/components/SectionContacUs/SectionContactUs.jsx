import React from 'react';
import './SectionContacUs.css';
import ReCAPTCHA from 'react-google-recaptcha';

class SectionContactUs extends React.Component {
  state = {
    preinscription: [],
    secret: '6Ld5l4whAAAAAIQdaEb4WtfwWAte-OMXYty9xabS',
    status: false,
    send: false,
    errorMessage: '',
    validated: false,
    recaptcha: false,
  };
  onChange = (value) => {
    this.setState({ recaptcha: true });
  };
  preinscription = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      if (this.state.recaptcha) {
        this.setState({ send: true });
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: e.target['0'].value,
            email: e.target['1'].value,
            codigoUniv:
              e.target['2'].value == '' ? '0000-000000' : e.target['2'].value,
          }),
        };
        // GET request using fetch with error handling
        fetch(global.URL + 'auth/preinscripcion', requestOptions)
          .then(async (response) => {
            const data = await response.json();
            // check for error response
            //if (!response.ok) {
            // get error message from body or default to response statusCode
            //const error = (data && data.message) || response.statusCode;
            //return Promise.reject(error);
            //}
            if (response.status == '201') {
              this.setState({ preinscription: data, status: true });
              console.log(this.state.preinscription);
              var x = document.getElementById('snackbar');
              x.innerHTML = 'Pre Inscripcion Completada';
              // Add the "show" class to DIV
              x.className = 'show';

              // After 3 seconds, remove the show class from DIV
              setTimeout(function () {
                x.className = x.className.replace('show', '');
              }, 3000);
            } else {
              this.setState({ send: false });
              this.setState({ preinscription: data, status: true });
              console.log(this.state.preinscription);
              var x = document.getElementById('snackbar');
              x.innerHTML = 'Error de envio';
              x.style.backgroundColor = '#a20000';
              // Add the "show" class to DIV
              x.className = 'show';

              // After 3 seconds, remove the show class from DIV
              setTimeout(function () {
                x.className = x.className.replace('show', '');
              }, 3000);
            }
          })
          .catch((error) => {
            this.setState({ errorMessage: error.toString(), status: false });
          });
      } else {
        var x = document.getElementById('snackbar');
        x.innerHTML = 'Marque el reCAPTCHA';
        // Add the "show" class to DIV
        x.className = 'show';
        x.style.backgroundColor = '#a20000';

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
          x.className = x.className.replace('show', '');
        }, 3000);
      }
      e.preventDefault();
      e.stopPropagation();
    }

    this.setState({ validated: true });
  };
  render() {
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
                style={{ padding: '1rem' }}
              >
                Pre-inscripción
              </a>
            </div>
          </div>
          <div className="separacion"></div>
          <div className="contactanos__form">
            <h2 className="contactanos__form-title">Pre-inscripción</h2>
            <p>Para obtener más informacion, no dude en ponerse en contacto</p>
            <form
              className="flx-a-c"
              onSubmit={this.preinscription}
              noValidate
              validated={this.state.validated ? 'true' : 'false'}
            >
              <div className="inputs flx-a-c">
                <label className="inputs__label">
                  <input
                    className="inputs__item"
                    id="inputName"
                    type="text"
                    name="name"
                    placeholder="* Nombre Completo"
                    required
                  />
                </label>
                <label className="inputs__label">
                  <input
                    className="inputs__item"
                    id="inputEmail"
                    type="email"
                    name="email"
                    placeholder="* Correo Electrónico"
                    required
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
                <div className="recaptcha">
                  <ReCAPTCHA
                    sitekey="6Ld5l4whAAAAAMALvbDlozxx6Nk5tcB-lFHq-HAW"
                    onChange={this.onChange}
                  />
                </div>
                <input
                  className="enviar"
                  type="submit"
                  value="Enviar"
                  disabled={this.state.send}
                />
                <div id="snackbar"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionContactUs;
