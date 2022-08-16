import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import connexionMethod from "../../services/connexion/login";

import { connexion } from "../../slices/connexionStatusSlice";
import { simpleUserId } from "../../slices/simpleUserData";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function login() {
  const dispatch = useDispatch();

  const router = useRouter();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const connect = (e) => {
    e.preventDefault();
    connexionMethod(state.email, state.password).then(() => {
      dispatch(connexion());
      alert("Vous êtes connecté");
      router.push("/");
    });
  };

  return (
    <div className="loginForm">
      <h1>Se connecter</h1>
      <form>
        <label htmlFor="email">Adresse mail</label>
        <input
          className="input-form-data"
          type="email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          className="input-form-data"
          type="password"
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <input
          type="submit"
          value="Se connecter"
          className="submit-form-button"
          onClick={connect}
        />
      </form>
      <p>Vous n'êtes pas encore inscrit</p>

      <Link href={"/signup"}>
        <input
          type="submit"
          value="S'inscrire"
          className="redirect-signup-button"
        />
      </Link>
    </div>
  );
}
