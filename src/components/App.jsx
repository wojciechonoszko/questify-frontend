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


import { Suspense, lazy, useEffect } from 'react'
import  Switch  from 'react-switch'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import resetNotification from '../Redux/notifAction'
import PrivateRoute from './PrivateRoutes'
// import PublicRoute from './PublicRoute'
import authOperations from '../Redux/auth/auth-operations'

import Loader from './Loader/Loader'
import Modal from './modal/modal'

import 'react-toastify/dist/ReactToastify.css'
import styles from './App.module.css'


const MainPage = lazy(() =>
  // import('./Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/),
  import('./main/main')
)
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
            <Loader size={100} />
          </Modal>
        }
      >
        <Switch>
          <PrivateRoute exact path="/" redirectTo="/auth">
            <MainPage />
          </PrivateRoute>

          {/* <PublicRoute exact path="/auth" restricted redirectTo="/">
            <AuthPage />
          </PublicRoute>

          <PublicRoute path="/auth/:verifyToken" restricted redirectTo="/">
            <VerificationPage />
          </PublicRoute> */}
        </Switch>
      </Suspense>

      <ToastContainer className={styles.notif} />
    </div>
  )
}