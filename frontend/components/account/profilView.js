import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import DownloadImgIcon from "../../public/icons/download-img-icon.png";
import { setSimpleUserData } from "../../feature/simpleUserData";
import axios from "axios";

export default function profilView() {
  const simpleUserData = useSelector((state) => state.simpleUser);
  const [displayFormFile, setDisplayFormFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const submitProfilImg = (e) => {
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
    <div className="account-view profil-view my-5">
      <h1 className="poppins-semibold col-10">Mon profil</h1>
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

          <div
            className="position-absolute start-50 top-50 transform-download-icon cursor-pointer"
            alt="Icone ajouter une image"
            onClick={() => setDisplayFormFile(!displayFormFile)}
          >
            <Image src={DownloadImgIcon}></Image>
          </div>
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
              onClick={submitProfilImg}
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

        <form action="">
          <div className="col-10 col-md-6 col-xl-3 mx-auto mb-4">
            <h4 className="mt-5 poppins-semibold">Nom d'utilisateur :</h4>
            <div className="col-12 account-view-box-min-height border border-2 rounded sixth-border-color ps-4 fs-4 align-middle d-flex">
              <span className="ms-0">{simpleUserData.username}</span>
            </div>
          </div>
          <div className="col-10 col-md-6 col-xl-3 mx-auto mb-4">
            <h4 className="mt-5 poppins-semibold">Email :</h4>
            <div className="col-12 account-view-box-min-height border border-2 rounded sixth-border-color ps-4 fs-4 align-middle d-flex">
              <span className="ms-0">{simpleUserData.email}</span>
            </div>
          </div>
          <div className="col-10 col-md-6 col-xl-3">
            <button
              type="submit"
              className="btn poppins-regular form-file-btn mt-4 "
            >
              Modifier les données
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
