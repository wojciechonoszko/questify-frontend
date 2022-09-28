import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = (credentials, onRegister) => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('users/signup', credentials)
    .then(() => {
      dispatch(authActions.registerSuccess());
      onRegister(true);
    })
    .catch(err => {
      dispatch(
        authActions.registerError(err.response?.data?.message || err.message)
      );
    });
};

const login = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  axios
    .post('users/login', credentials)
    .then(({ data }) => {
      token.set(data.result.token);

      dispatch(authActions.logInSuccess(data.result));
    })
    .catch(err => {
      dispatch(
        authActions.logInError(err.response?.data?.message || err.message)
      );
    });
};

const logout = () => dispatch => {
  dispatch(authActions.logOutRequest());

  axios
    .post('users/logout')
    .then(() => {
      token.unset();

      dispatch(authActions.logOutSuccess());
    })
    .catch(err => {
      dispatch(
        authActions.logOutError(err.response?.data?.message || err.message)
      );
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('users/current')
    .then(({ data }) =>
      dispatch(authActions.getCurrentUserSuccess(data.result))
    )
    .catch(err =>
      dispatch(
        authActions.getCurrentUserError(
          err.response?.data?.message || err.message
        )
      )
    );
};

const verifyUser = (token, isVerify) => dispatch => {
  dispatch(authActions.verifyUserRequest());

  axios
    .get(`users/verify/${token}`)
    .then(() => {
      dispatch(authActions.verifyUserSuccess());
      isVerify(true);
    })
    .catch(err => {
      dispatch(
        authActions.verifyUserError(err.response?.data?.message || err.message)
      );
    });
};

const authOperations = { register, login, logout, getCurrentUser, verifyUser };
export default authOperations;
