import React from "react";
import Navbar from "../../../../components/navbars/Navbar";
import ProfilView from "../../../../components/account/profilView";

export default function index() {
  return (
    <div>
      <Navbar></Navbar>
      <ProfilView></ProfilView>
    </div>
  );
}
