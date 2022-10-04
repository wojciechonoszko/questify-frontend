import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';

// import PageHeader from 'components/header/header';
// import PageMain from 'pages/Main/main';
// import LandingPage from 'pages/LandingPage/LandingPage';
import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './Redux/store';





ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Provider store={Store.store}>
      <BrowserRouter>
        <App>
          
        </App>
      </BrowserRouter>
    </Provider>
   </React.StrictMode>
);
