import React, { useState } from 'react';
import SpeakerFullPage from '../../components/SpeakerFullPage/SpeakerFullPage';
import './MainPage.css';
const ponente = '#';
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from '@ap.cx/react-fullpage';
import Header from '../../components/Header/Header';

const MainPage = () => {
  const [mainHeader, setMainHeader] = useState(false);
  const loginState = true;

  const speakers = [
    {
      id: 1,
      name: 'Manul cotrado',
      title: 'Building Data Driven Companies',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum in aut quibusdam rem veniam consequatur odit aperiam, eum doloremque tempore quas, magni id fugiat! Corporis ullam numquam amet dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum in aut quibusdam rem veniam consequatur odit aperiam, eum doloremque tempore quas, magni id fugiat! Corporis ullam numquam amet dignissimos.',
      foto: ponente,
    },
  ];
  return (
    <div className="main-page">
      <a className="main-logo" href="#">
        <img
          className="main-logo__img"
          src="https://i.ibb.co/rkMdCQB/logo.png"
          alt="Logo-esis-postmaster"
        />
      </a>
      <Header state={mainHeader} login={loginState} />
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          {speakers.map((data) => (
            <SpeakerFullPage key={data.id} datos={data} />
          ))}
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default MainPage;
