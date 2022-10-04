

// import React from 'react';
// import styles from "./App.module.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("http://localhost:8155/task/all")
//       .then((res) =>  res.json())
//       .then((data) => {
//         setData(data.message);
//       });
//   });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className={styles.welcome} id="myData">
//           {!data ? "... jeszcze nie polaczono z serverem" : data}
//         </div>
//       </header>
//     </div>
//   )
// }
  

// export default App;


import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from 'react'
import  Switch  from 'react-switch'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import resetNotification from '../Redux/notifAction'
// import PrivateRoute from './Components/PrivateRoutes'
// import PublicRoute from './Components/PublicRoute'
import authOperations from '../Redux/auth/auth-operations'
import MainPage from '../pages/Main/main'
import LandingPage from '../pages/LandingPage/LandingPage'
import Landing from '../pages/AuthPage/AuthPage'

// import Loader from './Components/Loader/Loader'
import Modal from './Modal/Modal'

import 'react-toastify/dist/ReactToastify.css'
import s from './App.module.css'

// const MainPage = lazy(() =>
//   import('../pages/Main/main' /* webpackChunkName: "MainPage"*/),
// )
// const AuthPage = lazy(() =>
//   import('./Pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/),
// )
// const VerificationPage = lazy(() =>
//   import(
//     './Pages/VerificationPage/VerificationPage' /* webpackChunkName: "VerificationPage"*/
//   ),
// )

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  const notification = useSelector(state => state.notification)
  if (notification !== null) {
    setTimeout(() => {
      dispatch(resetNotification(null))
    }, 5000)
  }

  useEffect(() => {
    toast.warn(notification)
  }, [notification])

  return (
    <div>
      <Suspense
        fallback={
          <Modal>
            {/* <Loader size={100} /> */}
          </Modal>
        }
      >
        
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth" element={<Landing />} />
          </Routes>
          {/* <PrivateRoute exact path="/" redirectTo="/auth">
            <MainPage />
          </PrivateRoute> */}
{/* 
          <PublicRoute exact path="/auth" restricted redirectTo="/">
            <AuthPage />
          </PublicRoute>

          <PublicRoute path="/auth/:verifyToken" restricted redirectTo="/">
            <VerificationPage />
          </PublicRoute> */}
        
      </Suspense>

      <ToastContainer className={s.notif} />
    </div>
  )
}