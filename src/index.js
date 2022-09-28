import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import AddCard from 'components/modal/modal';
import PageHeader from 'components/header/header';
import PageMain from 'components/main/main';
import LandingPage from 'pages/LandingPage/LandingPage';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { createStore } from 'redux';

import Card from 'components/Card/Card'
import CompletedCard from 'components/CompletedCard/CompletedCard'
import CompletedChallenge from 'components/CompletedChallenge/CompletedChallenge'
import CategoryModal from 'components/modal/CategoryModal/CategoryModal'

// const reducer = (state = {}, action) => state;

// const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <Card />
        <PageHeader />
        <PageMain />
        <CompletedCard />
        <CompletedChallenge />
        <CategoryModal />
        <AddCard></AddCard>
        <LandingPage />
      </App>
    </Provider>
  </React.StrictMode>
);

