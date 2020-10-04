import React, { Component } from "react";
import "./Login.scss"
export default class Login extends Component {
  render() {
    return (
      <div className="login-page-content">
        <div className="user-login">
          <h1 className="user-login__title">Zero Science</h1>
          <form autoComplete="off">
            <div className="user-login__form-control">
              <label htmlFor="user">Usuário</label>
              <input
                id="user"
                type="text"
                name="user"
                placeholder="Nome"
              />
            </div>
            <div className="user-login__form-control">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="****"
              />
            </div>
            <button
              type="submit"
              theme="contained-green"
              className="user-login__submit-button"
              rounded
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
      
    );
  }
}
