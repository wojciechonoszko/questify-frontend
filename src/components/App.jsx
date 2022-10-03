// export const App = (props) => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//       }}
//     >
//       {props.children}
//     </div>
//   );
// };


// import { Suspense, lazy, useEffect } from 'react'
// import  Switch  from 'react-switch'
// import { useDispatch, useSelector } from 'react-redux'
// // import { ToastContainer, toast } from 'react-toastify'

// import resetNotification from '../Redux/notifAction'
// import PrivateRoute from './PrivateRoutes'
// // import PublicRoute from './PublicRoute'
// import authOperations from '../Redux/auth/auth-operations'

// import Loader from './Loader/Loader'
// import Modal from './modal/modal'

// // import 'react-toastify/dist/ReactToastify.css'
// import styles from './App.module.css'


// const MainPage = lazy(() =>
//   // import('./Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/),
//   import('./main/main')
// )
// // const AuthPage = lazy(() =>
// //   import('./Pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/),
// // )
// // const VerificationPage = lazy(() =>
// //   import(
// //     './Pages/VerificationPage/VerificationPage' /* webpackChunkName: "VerificationPage"*/
// //   ),
// // )

// export default function App() {
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(authOperations.getCurrentUser())
//   }, [dispatch])

//   const notification = useSelector(state => state.notification)
//   if (notification !== null) {
//     setTimeout(() => {
//       dispatch(resetNotification(null))
//     }, 5000)
//   }

//   // useEffect(() => {
//   //   toast.warn(notification)
//   // }, [notification])

//   return (
//     <div>
//       <Suspense
//         fallback={
//           <Modal>
//             <Loader size={100} />
//           </Modal>
//         }
//       >
//         <Switch>
//           <PrivateRoute exact path="/" redirectTo="/auth">
//             <MainPage />
//           </PrivateRoute>

//           {/* <PublicRoute exact path="/auth" restricted redirectTo="/">
//             <AuthPage />
//           </PublicRoute>

//           <PublicRoute path="/auth/:verifyToken" restricted redirectTo="/">
//             <VerificationPage />
//           </PublicRoute> */}
//         </Switch>
//       </Suspense>

//       {/* <ToastContainer className={styles.notif} /> */}
//     </div>
//   )
// }

import React from 'react';
import styles from "./App.module.css";
// import { Routes, Route } from "react-router-dom";
// import MainPage from "../pages/Main/main";
// import LandingPage from "../pages/LandingPage/LandingPage";

// export const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/auth" element={<LandingPage />} />
//         {/* <Route path="/auth/:verifyToken" element={<VerificationPage />} /> */}
//       </Routes>
//     </div>
//   );
// };


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8155/task/633a7bf776c004d39b58664d")
      .then((res) =>  res.json())
      .then((data) => {
        setData(data.message);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className={styles.welcome}> 
          {!data ? "... jescze nie polaczono z serverem" : data}
        </div>
      </header>
    </div>
  )
  }

export default App;

// import React from 'react';
// import { useEffect, lazy, Suspense } from 'react';
// import { useDispatch } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
// //import './App.module.css';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
// import { authOperations } from './redux/auth/auth-operations';
// import AppBar from 'components/appBar/AppBar';

// const HomePage = lazy(() => import('./components/views/homePage/HomePage'));
// const LoginPage = lazy(() => import('./components/views/loginPage/Login'));
// const RegisterPage = lazy(() => import('./components/views/registerPage/RegisterPage'));
// const ContactsPage = lazy(() => import('./components/views/contactsPage/ContactsPage'));
// const NotFoundPage = lazy(() => import('components/notFoundPage/NotFoundPage'));

// export default function App() {

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <>
//     <AppBar />

//     <Suspense fallback={<div>Loading...</div>}>
//     <Routes>
//     <Route path='/' exact element={<PublicRoute > <HomePage /> </PublicRoute>} />
//     <Route path='/register' element={<PublicRoute restricted> <RegisterPage /> </PublicRoute>} />
//     <Route path='/login' element={<PublicRoute restricted> <LoginPage /> </PublicRoute>} />
//     <Route path='/contacts'  element={<PrivateRoute navigateTo = '/'> <ContactsPage /> </PrivateRoute>} />
//     <Route path='*' element={<PublicRoute restricted> <NotFoundPage /> </PublicRoute>} />
//     </Routes>
//     </Suspense>
//     </>
//   );
// }