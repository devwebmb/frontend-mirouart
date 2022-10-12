import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnnoncesData } from "../../feature/announcementsSlice";
import axios from "axios";
import AllAnnonceCardView from "./AllAnnonceCardView";

export default function AllAnnoncesView() {
  const dispatch = useDispatch();
  const annoncesData = useSelector((state) => state.annoncesData.annonces);

  const getAnnonces = () => {
    axios.get(`http://localhost:3060/api/announcement`).then((data) => {
      dispatch(setAnnoncesData(data.data.data));
    });
  };
  //   setTimeout(() => {
  //     console.log(annoncesData);
  //   }, 2000);
  useEffect(() => {
    getAnnonces();
    console.log(annoncesData);
  }, []);

  return (
    <div className="annonces-container">
      {annoncesData && <AllAnnonceCardView annonces={annoncesData} />}
    </div>
  );
}
