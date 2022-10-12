// import { Routes, Route } from "react-router-dom";
// import { Suspense, lazy, useEffect } from 'react'
// import  Switch  from 'react-switch'
// import { useDispatch, useSelector } from 'react-redux'
// import { ToastContainer, toast } from 'react-toastify'

// import resetNotification from '../Redux/notifAction'
// import authOperations from '../Redux/auth/auth-operations'
// import MainPage from '../pages/Main/main'

// import Landing from '../pages/AuthPage/AuthPage'

// // import Loader from './Components/Loader/Loader'
// import Modal from './Modal/Modal'

// import 'react-toastify/dist/ReactToastify.css'
// import s from './App.module.css'


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

//   useEffect(() => {
//     toast.warn(notification)
//   }, [notification])

//   return (
//     <div>
//       <Suspense
//         fallback={
//           <Modal>
//             {/* <Loader size={100} /> */}
//           </Modal>
//         }
//       >
        
//           <Routes>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/auth" element={<Landing />} />
//           </Routes>
//       </Suspense>

//       <ToastContainer className={s.notif} />
//     </div>
//   )
// }



import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'


import resetNotification from './Redux/notifAction'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import authOperations from './Redux/auth/auth-operations'

import Loader from './components/Loader/Loader'
// import Modal from './Modal/Modal'

import 'react-toastify/dist/ReactToastify.css'
import s from './App.module.css'

const MainPage = lazy(() =>
  import('./pages/Main/main' /* webpackChunkName: "MainPage"*/),
)
const AuthPage = lazy(() =>
  import('./pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage"*/),
)
const VerificationPage = lazy(() =>
  import(
    './pages/VerificationPage/VerificationPage' /* webpackChunkName: "VerificationPage"*/
  ),
)

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
          // <Modal>
            <Loader size={100} />
          // {/* </Modal> */}
        }
      >
        <Routes>
           {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
          /> */}

          <Route path="/" element={<PrivateRoute />} />
          
         <Route path="/auth" element={<PublicRoute />} />

          <Route path="/auth/:verifyToken" element={<VerificationPage />} />

           {/* <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
          /> */}
          
          {/* <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<Landing />} /> */}

          {/* <PublicRoute exact path="/auth" restricted redirectTo="/">
            <AuthPage />
          </PublicRoute>

          <PublicRoute path="/auth/:verifyToken" restricted redirectTo="/">
            <VerificationPage />
          </PublicRoute> */}
        </Routes>
      </Suspense>

      <ToastContainer className={s.notif} />
    </div>
  )
}