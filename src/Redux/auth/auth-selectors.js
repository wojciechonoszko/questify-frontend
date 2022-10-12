const getIsAuthenticated = state => state.auth.isAuthenticated;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getIsLoggedIn,
};

export default authSelectors;
