import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import AddCard from 'components/modal/modal';
import PageHeader from 'components/header/header';
import PageMain from 'components/main/main';
import MediaCard from 'components/cardsToday/cardsToday'
import DateAndTimePicker from 'components/timePickers/TimePickers'
import Card from 'components/card/Card'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <PageHeader />
      <PageMain />
      <AddCard></AddCard>
      <MediaCard></MediaCard>
      <DateAndTimePicker></DateAndTimePicker>
      <Card></Card>
    </App>
  </React.StrictMode>
);
