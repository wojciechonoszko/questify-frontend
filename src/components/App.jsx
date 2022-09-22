import React from "react";
import LandingPage from '../pages/LandingPage/LandingPage';

export const App = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {props.children}
      <LandingPage/>
    </div>
  );
};
