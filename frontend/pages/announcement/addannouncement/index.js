import React from "react";
import AddAnnouncement from "../../../components/annonces-page/AddAnnouncement";
import Navbar from "../../../components/navbars/Navbar";

export default function index() {
  return (
    <div>
      <Navbar></Navbar>
      <AddAnnouncement></AddAnnouncement>
    </div>
  );
}
