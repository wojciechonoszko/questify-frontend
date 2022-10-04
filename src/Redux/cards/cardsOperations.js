import axios from 'axios';
import cardsActions from './cardsActions';

// axios.defaults.baseURL = 'https://questify-goit-poland.herokuapp.com/';
//axios.defaults.baseURL = 'https://goit23-project.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:8155';

const fetchActiveCards = () => dispatch => {
  dispatch(cardsActions.fetchActiveCardsRequest());
  axios
     .get('task/all?isCompleted=false')
    // .get('task/all')
    .then(({ data }) =>
      dispatch(cardsActions.fetchActiveCardsSuccess(data))
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
    .get('task/all?isCompleted=true')
    // .get('task/all')
    .then(({ data }) =>
      dispatch(cardsActions.fetchDoneCardsSuccess(data))
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
      .post('task/add', card)
      .then(({ data }) => dispatch(cardsActions.addCardSuccess(data)))
      .catch(err =>
        dispatch(
          cardsActions.addCardError(err.response?.data?.message || err.message)
        )
      );
  };

const editCard = (id, card) => dispatch => {
  dispatch(cardsActions.editCardRequest());

  axios
    .put(`task/${id}`, card)
    // .put(`task/633b1096a4a3e87195074205`, card)
    .then(({ data }) => dispatch(cardsActions.editCardSuccess(data)))
    .catch(err =>
      dispatch(
        cardsActions.editCardError(err.response?.data?.message || err.message)
      )
    );
};

const deleteCard = cardId => dispatch => {
  dispatch(cardsActions.deleteCardRequest());

  axios
    .delete(`task/${cardId}`)
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
