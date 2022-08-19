import React from 'react';
import './SectionLocation.css';

class SectionLocation extends React.Component {
  state = {
    evento: [],
    status: false,
    errorMessage: '',
  };
  componentDidMount() {
    const headers = {
      Authorization: global.AUTHZ,
    };
    // GET request using fetch with error handling
    fetch(global.URL + 'evento', { headers })
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusCode
          const error = (data && data.message) || response.statusCode;
          return Promise.reject(error);
        }
        this.setState({ evento: data, status: true });
        console.log(this.state.evento);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString(), status: false });
      });
  }
  render() {
    let Event;
    if (this.state.status) {
      Event = this.state.evento.map((evento, index) => {
        return (
          <div className="locale flx-a-c">
            <div className="locale__img">
              <img src={evento.foto} alt="auditorio" />
            </div>
            <div className="locale__info">
              <h2 className="locale__title">{evento.lugar}</h2>
              <p className="locale__location">
                <span></span>
                {evento.direccion}
                <br />
                Universidad Nacional Jorge Basadre Grohmann
              </p>
              <p className="locale__description">{evento.descripLugar}</p>
            </div>
          </div>
        );
      });
    } else {
      Event = (
        <div className="locale flx-a-c">
          <div className="locale__img"></div>
          <div className="locale__info">
            <div className="d-flex justify-content-center">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <section className="section-lugar" id="lugar">
        {Event}
      </section>
    );
  }
}

export default SectionLocation;
