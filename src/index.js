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
<<<<<<< HEAD
>>>>>>> 56f3fee (card)
=======
import DateAndTimePicker from 'components/timePickers/TimePickers'
<<<<<<< HEAD
>>>>>>> 778541e (time picker)
=======
import Card from 'components/card/Card'
>>>>>>> fce165d (card card)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <PageHeader />
      <PageMain />
      <AddCard></AddCard>
      <MediaCard></MediaCard>
<<<<<<< HEAD
<<<<<<< HEAD
      <DateAndTimePicker />
=======
>>>>>>> 56f3fee (card)
=======
      <DateAndTimePicker></DateAndTimePicker>
<<<<<<< HEAD
>>>>>>> 778541e (time picker)
=======
      <Card></Card>
>>>>>>> fce165d (card card)
    </App>
  </React.StrictMode>
);
