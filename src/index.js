import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import AddCard from 'components/modal/modal';
import PageHeader from 'components/header/header';
import PageMain from 'components/main/main';
import MediaCard from 'components/cardsToday/cardsToday';
import DateAndTimePicker from 'components/timePickers/TimePickers';
import Card from 'components/card/Card';
import CardsToday from 'components/cardsToday/cardsToday';
// import CardsTomorrow from 'components/cardsTomorrow/CardsTomorrow'
//import Card from 'components/card/Card'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App>
          <PageHeader />
          <PageMain />
          <AddCard></AddCard>
          <MediaCard></MediaCard>
          <DateAndTimePicker></DateAndTimePicker>
          <CardsToday />
          {/* <CardsTomorrow /> */}
          <Card></Card>
        </App>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
