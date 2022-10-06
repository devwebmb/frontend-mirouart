import React from "react";
import Navbar from "../../../components/navbars/Navbar";
import AccountView from "../../../components/account/accountView";

export default function index() {
  return (
    <div>
      <Navbar></Navbar>
      <AccountView></AccountView>
    </div>
  );
}
