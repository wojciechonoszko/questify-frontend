
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../Redux/auth/auth-selectors';
import MainPage from '../pages/Main/main';
import Landing from '../pages/AuthPage/AuthPage';


export default function PrivateRoute({ children, navigateTo="/auth", ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn);
    // const isLoggedIn = true;
    return isLoggedIn ? <MainPage /> : <Landing />
    
}


// import { Route, Redirect } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import authSelectors from '../Redux/auth/auth-selectors'
// /**
//  * - If the route is private and the user is logged in, render the component
//  * - Otherwise render Redirect to /auth
//  */
// export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
//   const getIsAuthenticated = useSelector(authSelectors.getIsAuthenticated)

//   return (
//     <Route {...routeProps}>
//       {getIsAuthenticated ? children : <Redirect to={redirectTo} />}
//     </Route>
//   )
// }