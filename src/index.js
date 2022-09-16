import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import AddCard from 'components/modal/modal';
import MediaCard from 'components/cardsToday/cardsToday'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <AddCard></AddCard>
      <MediaCard></MediaCard>
    </App>
  </React.StrictMode>
);
