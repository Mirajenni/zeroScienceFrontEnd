import React, { Component } from "react";
import "./Login.scss"
export default class Login extends Component {
  render() {
    return (
      <div className="content">
        <div className="user-login">
          <h1 className="user-login__title">Login</h1>
          <form>
            <div className="user-login__form-control">
              <label htmlFor="user">Usuário</label>
              <input
                id="user"
                type="text"
                name="user"
              />
            </div>
            <div className="user-login__form-control">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
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
