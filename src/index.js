import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import AddCard from 'components/modal/modal';
<<<<<<< HEAD
import PageHeader from 'components/header/header';
import PageMain from 'components/main/main';
import MediaCard from 'components/cardsToday/cardsToday';
import DateAndTimePicker from 'components/timePickers/TimePickers';

=======
import MediaCard from 'components/cardsToday/cardsToday'
>>>>>>> 56f3fee (card)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <PageHeader />
      <PageMain />
      <AddCard></AddCard>
      <MediaCard></MediaCard>
<<<<<<< HEAD
      <DateAndTimePicker />
=======
>>>>>>> 56f3fee (card)
    </App>
  </React.StrictMode>
);
