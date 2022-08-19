import React from 'react';

import alienware from '../../assets/img/sponsors/alienware.svg';
import asus from '../../assets/img/sponsors/asus.svg';
import msi from '../../assets/img/sponsors/msi.svg';
import nvidia from '../../assets/img/sponsors/nvidia.svg';

import './SectionSponsor.css';

class SectionSponsor extends React.Component {
  state = {
    sponsor: [],
    status: false,
    errorMessage: '',
  };
  componentDidMount() {
    const headers = {
      Authorization: global.AUTHZ,
    };
    // GET request using fetch with error handling
    fetch(global.URL + 'auspiciador', { headers })
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusCode
          const error = (data && data.message) || response.statusCode;
          return Promise.reject(error);
        }
        this.setState({ sponsor: data, status: true });
        console.log(this.state.sponsor);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString(), status: false });
      });
  }
  render() {
    let Sponsor;
    if (this.state.status) {
      Sponsor = this.state.sponsor.map((item, index) => {
        return (
          <a className="auspiciadores__link" href={item.link} key={index}>
            <img src={item.logo} alt="" />
          </a>
        );
      });
    } else {
      Sponsor = (
        <div className="d-flex justify-content-center">
          <span className="spinner-grow text-ligth" role="status"></span>
        </div>
      );
    }
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
        <div className="auspiciadores section-l">{Sponsor}</div>
      </section>
    );
  }
}

export default SectionSponsor;
