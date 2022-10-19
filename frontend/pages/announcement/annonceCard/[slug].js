import React from "react";
import Navbar from "../../../components/navbars/Navbar";
import AnnonceCard from "../../../components/annonces-page/AnnonceCard";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function index() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const [annonceData, setAnnonceData] = useState([]);

  const getAnnonce = () => {
    axios.get(`http://localhost:3060/api/announcement/${slug}`).then((data) => {
      console.log(data.data.data);
      setAnnonceData(data.data.data);
    });
  };

  useEffect(() => {
    getAnnonce();
  }, []);

  return (
    <div>
      <Navbar />
      {annonceData && <AnnonceCard annonce={annonceData} />}
    </div>
  );
}
