import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnnoncesData } from "../../feature/announcementsSlice";
import axios from "axios";
import AllAnnonceCardView from "./AllAnnonceCardView";
import Pagination from "../pagination/Pagination";

export default function AllAnnoncesView() {
  const dispatch = useDispatch();
  const annoncesData = useSelector((state) => state.annoncesData.annonces);
  const [annonces, setAnnonces] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [annoncesPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * annoncesPerPage;
  const indexOfFirstPost = indexOfLastPost - annoncesPerPage;
  const currentAnnonces = annonces.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getAnnonces = () => {
    axios.get(`http://localhost:3060/api/announcement`).then((data) => {
      dispatch(setAnnoncesData(data.data.data));
      setAnnonces(data.data.data)
    });
  };

  useEffect(() => {
    getAnnonces();
  }, []);

  return (
    <div className="annonces-container my-5">
      {annoncesData && <AllAnnonceCardView annonces={currentAnnonces} />}
      {annoncesData && <Pagination 
        annoncesPerPage={annoncesPerPage}
        paginate={paginate}
        totalAnnonces={annonces.length}
        currentPage={currentPage}
      />}
    </div>
  );
}
