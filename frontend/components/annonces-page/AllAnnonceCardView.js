import React from "react";
import Link from "next/link";

export default function AllAnnonceCardView({ annonces }) {
  return (
    <div className="all-annonces-card-view col-10 mx-auto row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-5">
      {annonces.map((annonce) => {
        return (
          <div className="col" key={annonce.id}>
            <div className="card p-0">
              <div className="col-12 card-img-height card-img-top p-3 ">
                <img
                  src={annonce.imgUrl1}
                  alt="Image de l'annonce"
                  className="w-100 object-fit-contain h-100 rounded"
                />
              </div>
              <div className="card-body col-12 px-3">
                <h2 className="card-title  poppins-semibold">
                  {annonce.title}
                </h2>
                <p className="secondary-color poppins-semibold fs-5">
                  {annonce.category}
                </p>
                <p className="card-text poppins-semibold">
                  <span className="sixth-color poppins-regular">
                    Réalisé par
                  </span>{" "}
                  {annonce.author}
                </p>
                <p className="card-text poppins-semibold fs-4">
                  {annonce.price} €
                </p>
                <Link href={{
                  pathname: `/announcement/annonceCard/[slug]`,
                  query: { slug: annonce.id}
                }}>
                {/* <Link href={`/announcement/annonceCard/${annonce.id.toString()}`}> */}
                  <button
                    type="submit"
                    className="btn poppins-regular form-file-btn "
                  >
                    Voir l'annonce
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
