import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

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
<<<<<<< HEAD
>>>>>>> 778541e (time picker)
=======
import Card from 'components/card/Card'
>>>>>>> fce165d (card card)
=======
import CardsToday from 'components/cardsToday/cardsToday'
//import Card from 'components/card/Card'
>>>>>>> 3692e1d (card)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
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
=======
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App>
          <PageHeader />
          <PageMain />
          <AddCard></AddCard>
          <MediaCard></MediaCard>
          <DateAndTimePicker></DateAndTimePicker>
          <CardsToday/>
          {/* <Card></Card> */}
        </App>
      </PersistGate>
    </Provider>
>>>>>>> e488aab (update card)
  </React.StrictMode>
);
