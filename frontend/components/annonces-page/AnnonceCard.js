import React, { useState, useEffect } from "react";
import AddFavoriteHeart from "../../public/icons/favori-icon-green-bkg.png";
import AddMessage from "../../public/icons/add-message.png";
import Image from "next/image";

export default function AnnonceCard({ annonce }) {
  const test = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="annonce-card col-10 mx-auto my-5 d-flex flex-column flex-xl-row">
      <div className="col-12 col-xl-6 pe-xl-5 mt-2">
        <div className="col-12 d-flex justify-content-between">
          <div className="ms-0">
            <Image src={AddFavoriteHeart} width={35} height={35} />
          </div>
          <div className="d-flex me-0">
            <p className="pe-3 mb-0 secondary-color fs-6 poppins-medium">
              Envoyer un message
            </p>
            <div>
              <Image src={AddMessage} />
            </div>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-between mt-4">
          <h1 className="poppins-semibold mb-0 ms-0">{annonce.title}</h1>
          <p className="poppins-semibold secondary-color mb-0 fs-4 d-flex align-items-center me-0">
            {annonce.price} €
          </p>
        </div>

        <p className="my-3 fs-5 poppins-regular secondary-color">
          {annonce.category}
        </p>

        <p className="poppins-regular">{annonce.annonce}</p>
      </div>

      <div className="col-12 col-xl-6 ps-xl-5 mt-5 d-flex flex-column ">
        {annonce.imgUrl1 && (
          <div className="col-12 mb-4 mt-4 mt-xl-0">
            <div>
              <img
                src={annonce.imgUrl1}
                className="w-100 object-fit-contain mh-500 "
              />
            </div>
          </div>
        )}

        {annonce.imgUrl2 && (
          <div className="col-12 d-flex">
            <div className="col-6 p-5">
              <img
                src={annonce.imgUrl2}
                className="w-100 h-200 object-fit-cover cursor-pointer"
                onClick={test}
              />
            </div>
            {annonce.imgUrl3 && (
              <div className="col-6 p-5 ">
                <img
                  src={annonce.imgUrl3}
                  className="w-100 h-200 object-fit-cover cursor-pointer"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
