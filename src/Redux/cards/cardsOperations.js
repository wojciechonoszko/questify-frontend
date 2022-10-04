import axios from 'axios';
import cardsActions from './cardsActions';

// axios.defaults.baseURL = 'https://questify-goit-poland.herokuapp.com/';
//axios.defaults.baseURL = 'https://goit23-project.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:8155';

const fetchActiveCards = () => dispatch => {
  dispatch(cardsActions.fetchActiveCardsRequest());
  axios
    .get('cards?isCompleted=false')
    //  .get('cards/')
    .then(({ data }) =>
      dispatch(cardsActions.fetchActiveCardsSuccess(data.result.cards))
    )
    .catch(err =>
      dispatch(
        cardsActions.fetchActiveCardsError(
          err.response?.data?.message || err.message
        )
      )
    );
};

const fetchDoneCards = () => dispatch => {
  dispatch(cardsActions.fetchDoneCardsRequest());

  axios
    .get('cards?isCompleted=true')
    //  .get('cards/')
    .then(({ data }) =>
      dispatch(cardsActions.fetchDoneCardsSuccess(data.result.cards))
    )
    .catch(err =>
      dispatch(
        cardsActions.fetchDoneCardsError(
          err.response?.data?.message || err.message
        )
      )
    );
};

const addCard =
  (text, deadline, difficulty, category, isChallenge) => dispatch => {
    const card = {
      text,
      deadline,
      difficulty,
      category,
      isChallenge,
    };

    dispatch(cardsActions.addCardRequest());

    axios
      .post('cards', card)
      .then(({ data }) => dispatch(cardsActions.addCardSuccess(data.result)))
      .catch(err =>
        dispatch(
          cardsActions.addCardError(err.response?.data?.message || err.message)
        )
      );
  };

const editCard = (cardId, card) => dispatch => {
  dispatch(cardsActions.editCardRequest());

  axios
    .put(`cards/${cardId}`, card)
    // .put(`task/633b1096a4a3e87195074205`, card)
    .then(({ data }) => dispatch(cardsActions.editCardSuccess(data.result)))
    .catch(err =>
      dispatch(
        cardsActions.editCardError(err.response?.data?.message || err.message)
      )
    );
};

const deleteCard = cardId => dispatch => {
  dispatch(cardsActions.deleteCardRequest());

  axios
    .delete(`cards/${cardId}`)
    .then(() => dispatch(cardsActions.deleteCardSuccess(cardId)))
    .catch(err =>
      dispatch(
        cardsActions.deleteCardError(err.response?.data?.message || err.message)
      )
    );
};

const cardsOperations = {
  fetchActiveCards,
  fetchDoneCards,
  addCard,
  editCard,
  deleteCard,
};

export default cardsOperations;
