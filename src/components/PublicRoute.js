import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { authSelectors } from '../Redux/auth/auth-selectors';

export default function PublicRoute({ children, navigateTo, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Navigate to={navigateTo} />
      ) : (
        children
      )}
    </Route>
  );
}

// import { Route, Redirect } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import authSelectors from '../Redux/auth/auth-selectors'
// /**
//  * - If the route is limited and the user is logged in, render a redirect to /
//  * - Otherwise render the component
//  */
// export default function PublicRoute({ navigateTo, children, ...routeProps }) {
//   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
//   return (
//     <Route {...routeProps}>
//       {isAuthenticated && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         children
//       )}
//     </Route>
//   )
// }
