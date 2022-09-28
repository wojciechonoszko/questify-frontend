import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import AddCard from 'components/modal/modal';
import PageHeader from 'components/header/header';
import PageMain from 'components/main/main';
import LandingPage from 'pages/LandingPage/LandingPage';
import './index.css';

import { Provider } from 'react-redux';
import entireStore from './Redux/store';

import Card from 'components/Card/Card';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={entireStore.store}>
      <App>
        
        <Card />
        <PageHeader />
        <PageMain />
        <AddCard></AddCard>
        <LandingPage />
      </App>
    </Provider>
  </React.StrictMode>
);
