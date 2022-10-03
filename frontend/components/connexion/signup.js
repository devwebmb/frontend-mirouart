import React, { useState } from "react";
import signup from "../../service/connexion/signup";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function signupform() {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const router = useRouter();

  const createAccount = (e) => {
    e.preventDefault();
    signup(state.email, state.username, state.password).then(() => {
      router.push("/connexion");
    });
  };

  return (
    <div>
      <div className="loginForm">
        <h1>S'inscrire</h1>
        <form>
          <label htmlFor="email">Adresse mail</label>
          <input
            className="input-form-data"
            type="email"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <label htmlFor="email">Nom d'utilisateur</label>
          <input
            className="input-form-data"
            type="text"
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            className="input-form-data"
            type="password"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <input
            type="submit"
            value="S'inscrire"
            className="submit-form-button"
            onClick={createAccount}
          />
        </form>
      </div>
    </div>
  );
}
