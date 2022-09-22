import React, { Component } from 'react';
import styles from './Login.module.css';

const INITIAL_STATE = {
  nickname: ''
};

class Login extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { userLogin, history } = this.props;
    const nickname = localStorage.getItem('questifyNickname');

    if (nickname) {
      userLogin({ nickname }).then(() => history.push('/dashboard'));
    }
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userLogin, history } = this.props;
    const { nickname } = this.state;
    userLogin({ nickname }).then(() => history.push('/dashboard'));
    localStorage.setItem('questifyNickname', nickname);
    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className={styles.login_container}>
        <span className={styles.logo} />
        <p className={styles.login__slogan}>
          Questify will turn your life into a thrilling game full of amazing quests and exciting challenges.
        </p>
        <form className={styles.login_form} onSubmit={this.handleSubmit}>
          <label htmlFor="nickname" className={styles.login__label}>
            Write your email to sign up or log in
            <input
              className={styles.login__input}
              onChange={this.handleChange}
              name="nickname"
              type="nickname"
              value={this.state.nickname}
              required="required"
              minLength="5"
              placeholder="Email"
            />
            <input
              className={styles.login__input}
              onChange={this.handleChange}
              name="nickname"
              type="nickname"
              value={this.state.nickname}
              required="required"
              minLength="5"
              placeholder="Password"
            />
          </label>
          <button className={styles.login_button} type="submit">
            go!
          </button>
        </form>
      </div>
    );
  }
}

export default Login