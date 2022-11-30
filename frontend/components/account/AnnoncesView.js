import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function AnnoncesView() {
  const [annonces, setAnnonces] = useState([]);
  const simpleUserId = useSelector((state) => state.simpleUser.simpleUserId);

  useEffect(() => {
    axios.get(`http://localhost:3060/api/announcement`).then((result) => {
      const data = result.data.data;
      const results = data.filter((data) => data.posterId === simpleUserId);
      setAnnonces(results);
    });
  }, []);

  return <div></div>;
}
