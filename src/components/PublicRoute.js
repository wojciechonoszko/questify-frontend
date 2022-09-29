import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../Redux/auth/auth-selectors';
/**
 * - If the route is limited and the user is logged in, render a redirect to /
 * - Otherwise render the component
 */
export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
    return (
      <Routes>
        <Route {...routeProps}>
          {/* <>
            {isAuthenticated && routeProps.restricted ? (
              <Navigate replace to={redirectTo} />
            ) : (
              children
            )}
          </> */}
        </Route>
      </Routes>
    );
}
