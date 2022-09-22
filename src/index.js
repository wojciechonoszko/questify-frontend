import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import AddCard from 'components/modal/modal';
import PageHeader from 'components/header/header';
import PageMain from 'components/main/main';
import LandingPage from 'pages/LandingPage/LandingPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <PageHeader />
      <PageMain />
      <AddCard></AddCard>
      <LandingPage />
    </App>
  </React.StrictMode>
);
