// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import authSelectors from '../Redux/auth/auth-selectors';

// export default function PublicRoute({ children, navigateTo, restricted = true }) {
//     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//     const shouldNavigate = isLoggedIn && restricted;
//   return shouldNavigate ? <Navigate to={navigateTo} /> : children;
// }

import { Route, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authSelectors from '../Redux/auth/auth-selectors'
import Landing from '../pages/AuthPage/AuthPage'
/**
 * - If the route is limited and the user is logged in, render a redirect to /
 * - Otherwise render the component
 */
export default function PublicRoute({ navigateTo='/', children, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  //const isAuthenticated = true;
  console.log(isAuthenticated);
  return (
      isAuthenticated ?  <Navigate to={navigateTo}/> : <Landing/>
  );
}