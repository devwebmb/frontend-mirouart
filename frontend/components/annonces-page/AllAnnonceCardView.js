import React from "react";

export default function AllAnnonceCardView({ annonces }) {
  return (
    <div className="all-annonces-card-view">
      {annonces.map((annonce) => {
        return (
          <div className="card" key={annonce.id}>
            <div className="top-img col-3">
              <div className="">
                <img src={annonce.imgUrl1} alt="Image de l'annonce" className="object-fit-cover"/>
              </div>
              <hr />
              <h2>{annonce.title}</h2>
              <p>{annonce.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
