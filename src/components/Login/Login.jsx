import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperations from '../../Redux/auth/auth-operations'
import authActions from '../../Redux/auth/auth-actions'
import 'react-toastify/dist/ReactToastify.css'
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    if (email === '') {
      dispatch(authActions.logInError('Enter email!'))
    } else if (password.length < 8) {
      dispatch(authActions.logInError('Enter a password at least 8 characters'))
    } else {
      dispatch(authOperations.login({ email, password }))
      clear()
    }
  }

  const clear = () => {
    setEmail('')
    setPassword('')
  }
 
  return (
    <div className={styles.login_container}>
      <span className={styles.logo} />
      <p className={styles.login__slogan}>
        Questify will turn your life into a thrilling game full of amazing quests and exciting challenges.
      </p>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <label htmlFor="nickname" className={styles.login__label}>
          Write your email to sign up or log in
          <input
            className={styles.login__input}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            id="email"
            value={email}
            required="required"
            placeholder="Email"
          />
          <input
            className={styles.login__input}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            id="password"
            value={password}
            required="required"
            minLength="8"
            placeholder="Password"
          />
        </label>
        <button className={styles.login_button} type="submit">
          go!
        </button>
      </form>
    </div>
  )
}