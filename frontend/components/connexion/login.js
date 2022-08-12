import React from "react";

export default function login() {
  return (
    <div className="loginForm">
      <h1>Se connecter</h1>
      <form>
        <label htmlFor="email">Adresse mail</label>
        <input className="input-form-data" type="email" />
        <label htmlFor="password">Mot de passe</label>
        <input className="input-form-data" type="password" />
        <input
          type="submit"
          value="Se connecter"
          className="submit-form-button"
        />
      </form>
      <p>Vous n'êtes pas encore inscrit</p>
      <input
        type="submit"
        value="S'inscrire"
        className="redirect-signup-button"
      />
    </div>
  );
}
