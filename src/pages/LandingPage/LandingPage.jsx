import React from 'react';
import Login from '../../components/Login/Login';
import s from './LandingPage.module.css';

const LandingPage = ({ ...props }) => {
  return (
    <div className={s.landingPage}>
      <Login {...props} />
    </div>
  );
};

export default LandingPage;