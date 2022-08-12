import React from "react";
import Navbar from "../../componentS/navbars/navbar";
import Login from "../../components/connexion/login";
import Signup from "../../components/connexion/signup"

export default function connexionPage() {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
}
