import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageProfil from "../../public/images/account/webcam-toy-photo1-removebg-previ.jpg";
import DownloadImgIcon from "../../public/icons/download-img-icon.png";
import ProfilIcon from "../../public/icons/profil-icon-ok.png";
import AnnouncementIcon from "../../public/icons/announcements-icone.png";
import InboxIcon from "../../public/icons/inbox-icon.png";
import FavoriteIcon from "../../public/icons/favorite-icon.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { setSimpleUserData } from "../../feature/simpleUserData";

export default function accountView() {
  const dispatch = useDispatch();

  const simpleUserData = useSelector((state) => state.simpleUser);

  const [displayFormFile, setDisplayFormFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const submitData = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("profilImgUrl", selectedFile);
    formdata.append("simpleUserId", simpleUserData.simpleUserId);

    axios
      .put(`http://localhost:3060/api/user/simpleUser/updatedata`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => {
        console.log(data);

        dispatch(
          setSimpleUserData({
            profilImgUrl: data.data.data.profilImgUrl,
            email: data.data.data.email,
            username: data.data.data.username,
            simpleUserId: data.data.data.id,
          })
        );

        setDisplayFormFile(!displayFormFile);
      });
  };

  return (
    <div className="account-view my-5">
      <h1 className="poppins-semibold col-10">Mon compte</h1>

      <div className="account-view-container">
        <div className="position-relative">
          <div className="profil-img-container rounded-circle mt-4">
            {simpleUserData.profilImgUrl && (
              <Image
                src={simpleUserData.profilImgUrl}
                width={150}
                height={150}
                className="profil-img-account"
              ></Image>
            )}
          </div>

          {!simpleUserData.profilImgUrl && (
            <div
              className="position-absolute start-50 top-50 translate-middle cursor-pointer"
              alt="Icone ajouter une image"
              onClick={() => setDisplayFormFile(!displayFormFile)}
            >
              <Image src={DownloadImgIcon}></Image>
            </div>
          )}
        </div>

        {displayFormFile && (
          <form className="col-10 col-md-8 col-xl-4 my-5">
            <label
              htmlFor="formFile"
              className="form-label poppins-regular mb-3 fs-5"
            >
              Choisissez une image de profil :
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
            />
            <button
              type="submit"
              className="btn poppins-regular form-file-btn mt-4"
              onClick={submitData}
            >
              Envoyer l'image
            </button>
          </form>
        )}

        <h2 className="text-center poppins-semibold mt-4">
          {simpleUserData.username}
        </h2>

        <h2 className="text-center poppins-regular sixth-color mb-5">
          {simpleUserData.email}
        </h2>

        <div>
          <Link href={"/account/simpleUser/profil"}>
            <div className="d-flex col-10 col-md-6 col-xl-3 mx-auto border border-2 ps-4 py-3 rounded sixth-border-color my-4 account-box-min-height cursor-pointer">
              <div className="col-3 d-flex rounded-circle">
                <Image src={ProfilIcon}></Image>
              </div>
              <span className="col-9 fs-3 poppins-semibold align-middle my-2">
                Mon profil
              </span>
            </div>
          </Link>
          <Link href={"/account/simpleUser/annonces"}>
            <div className="d-flex col-10 col-md-6 col-xl-3 mx-auto border border-2 ps-4 py-3 rounded sixth-border-color my-4  account-box-min-height cursor-pointer">
              <div className="col-3 d-flex">
                <Image src={AnnouncementIcon}></Image>
              </div>
              <span className="col-9 fs-3 poppins-semibold align-middle">
                Mes annonces
              </span>
            </div>
          </Link>

          <div className="d-flex col-10 col-md-6 col-xl-3 mx-auto border border-2 ps-4 py-3 rounded sixth-border-color my-4 account-box-min-height cursor-pointer">
            <div className="col-3 d-flex">
              <Image src={InboxIcon}></Image>
            </div>
            <span className="col-9 fs-3 poppins-semibold align-middle">
              Mes messages
            </span>
          </div>
          <div className="d-flex col-10 col-md-6 col-xl-3 mx-auto border border-2 ps-4 py-3 rounded sixth-border-color my-4 account-box-min-height cursor-pointer">
            <div className="col-3 d-flex">
              <Image src={FavoriteIcon}></Image>
            </div>
            <span className="col-9 fs-3 poppins-semibold align-middle">
              Mes favoris
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
