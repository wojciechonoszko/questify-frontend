import React from "react";
import LandingPage from '../pages/LandingPage/LandingPage';

export const App = () => {
  return (
    <>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <LandingPage/>
      </div>
      </>
  );
};
