import React, { useState } from "react";
import Image from "next/image";
import AddImageIcon from "../../public/icons/icon-add-image.png";
import TrashIcon from "../../public/icons/trash-icon.png";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Login from "../../components/connexion/Login";
import { useRouter } from "next/router";

export default function AddAnnouncement() {
  const router = useRouter();

  const simpleUserData = useSelector((state) => state.simpleUser);
  const isConnected = useSelector((state) => state.isConnected.value);
  const [displayFormFile, setDisplayFormFile] = useState(false);

  const [selectedFile, setSelectedFile] = useState("");

  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);

  const [imageSrc, setImageSrc] = useState("");
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [imageSrc3, setImageSrc3] = useState("");

  const [imageUrl1, setImageUrl1] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  const [imageUrl3, setImageUrl3] = useState(null);

  const addImageUrl = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const src = URL.createObjectURL(selectedFile);

      if (!imageUrl1) {
        setImageUrl1(selectedFile);
        setImageSrc1(src);
        setDisplayFormFile(false);
        setSelectedFile("");
      } else if (imageUrl1 && !imageUrl2) {
        setImageUrl2(selectedFile);
        setImageSrc2(src);
        setDisplayFormFile(false);
        setSelectedFile("");
      } else if (imageUrl1 && imageUrl2 && !imageUrl3) {
        setImageUrl3(selectedFile);
        setImageSrc3(src);
        setDisplayFormFile(false);
        setSelectedFile("");
      }
    } else {
      setDisplayFormFile(false);
    }
  };

  const deleteImg1 = (e) => {
    e.preventDefault();

    setImageSrc1("");
    setImageUrl1(null);

    if (imageSrc2) {
      setImageSrc1(imageSrc2);
      setImageSrc2("");
      setImageUrl1(imageUrl2);
      setImageUrl2(null);
      if (imageSrc3) {
        setImageSrc2(imageSrc3);
        setImageSrc3("");
        setImageUrl2(imageUrl3);
        setImageUrl3(null);
      }
    }
  };

  const deleteImg2 = (e) => {
    e.preventDefault();

    setImageSrc2("");
    setImageUrl2(null);

    if (imageSrc3) {
      setImageSrc2(imageSrc3);
      setImageSrc3("");
      setImageUrl2(imageUrl3);
      setImageUrl3(null);
    }
  };

  const deleteImg3 = (e) => {
    e.preventDefault();

    setImageSrc3("");
    setImageUrl3(null);
  };

  const submitAnnonce = (e) => {
    e.preventDefault();

    console.log(description);

    const formdata = new FormData();
    if (imageUrl1) {
      formdata.append("announcementImgUrl", imageUrl1);
    }
    if (imageUrl2) {
      formdata.append("announcementImgUrl", imageUrl2);
    }
    if (imageUrl3) {
      formdata.append("announcementImgUrl", imageUrl3);
    }
    formdata.append("annonce", description);
    formdata.append("author", simpleUserData.username);
    formdata.append("title", title);
    formdata.append("posterId", simpleUserData.simpleUserId);
    formdata.append("category", category);
    formdata.append("price", price);

    axios
      .post(`http://localhost:3060/api/announcement/add`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => {
        alert("Votre annonce a été publiée, merci.")
        router.push("/")
      });
  };

  useEffect(() => {
    if (setImageSrc1 && selectedFile) {
      const src = URL.createObjectURL(selectedFile);
      setImageSrc(src);
    }
  }, [selectedFile]);

  if (isConnected) {
    return (
      <div>
        <div className="addannounce-view col-10 mx-auto my-5 d-flex flex-column flex-xl-row">
          <div className="col-12 col-xl-6 pe-xl-5">
            <form>
              <label className="form-label poppins-semibold fs-4">
                Titre :
              </label>
              <input
                type="text"
                className="col-12 py-1 account-view-box-min-height border border-2 rounded sixth-border-color ps-2  align-middle d-flex mb-3"
                onChange={(e) => {
                  setTitle(e.currentTarget.value);
                }}
              />
              <label className="form-label poppins-semibold fs-4">
                Catégorie :
              </label>
              <select
                className="col-12 py-1 account-view-box-min-height border border-2 rounded sixth-border-color ps-2  align-middle d-flex mb-3"
                onChange={(e) => {
                  setCategory(e.currentTarget.value);
                }}
              >
                <option selected>Choisissez votre catégorie</option>
                <option value="Peinture">Peinture</option>
                <option value="Dessin">Dessin</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Autres">Autres</option>
              </select>
              <label className="form-label poppins-semibold fs-4">
                Prix (en euros) :
              </label>
              <input
                type="number"
                className="col-3 py-1 account-view-box-min-height border border-2 rounded sixth-border-color ps-2 mb-3 align-middle d-flex"
                onChange={(e) => {
                  setPrice(e.currentTarget.value);
                }}
              />
              <label className="form-label poppins-semibold fs-4">
                Description :
              </label>
              <textarea
                className="col-12 py-1 account-view-box-min-height border border-2 rounded sixth-border-color ps-2  align-middle d-flex"
                rows={5}
                onChange={(e) => {
                  setDescription(e.currentTarget.value);
                }}
              />
            </form>
          </div>

          {!displayFormFile && (
            <div className="col-12 col-xl-6 ps-xl-5">
              {!imageSrc1 ? (
                <div className="col-12 mb-4 mt-4 mt-xl-0">
                  <div className="col-12 rounded seventh-color-background add-file-container position-relative cursor-pointer">
                    <div
                      className="position-absolute d-flex flex-column start-50 top-50 translate-middle"
                      onClick={() => {
                        setDisplayFormFile(!displayFormFile);
                      }}
                    >
                      <p className="poppins-regular third-color mb-2 nowrap fs-4">
                        Ajouter une image
                      </p>
                      <div>
                        <Image src={AddImageIcon}></Image>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-12 mb-4 mt-4 mt-xl-0">
                  <div className="col-6 rounded border border-3 add-file-container position-relative">
                    <img
                      src={imageSrc1}
                      className="object-fit-cover w-100 h-100 p-1"
                    ></img>{" "}
                    <div
                      className="position-absolute bottom-0 end-0 cursor-pointer trash-icon-container"
                      onClick={deleteImg1}
                    >
                      <Image src={TrashIcon} width={30} height={30}></Image>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-12 d-flex row mx-0">
                {!imageSrc2 ? (
                  <div
                    className="col-xl-6 ps-0 pe-0 pe-xl-3 mb-4 mb-xl-0"
                    onClick={() => {
                      setDisplayFormFile(!displayFormFile);
                    }}
                  >
                    <div className="col-12 rounded seventh-color-background add-file-container position-relative cursor-pointer">
                      <div className="position-absolute d-flex flex-column start-50 top-50 translate-middle">
                        <p className="poppins-regular third-color mb-2 nowrap fs-4">
                          Ajouter une image
                        </p>
                        <div>
                          <Image src={AddImageIcon}></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-xl-6 mb-4 mt-4 mt-xl-0">
                    <div className="col-12 rounded border border-3 add-file-container position-relative">
                      <img
                        src={imageSrc2}
                        className="object-fit-cover w-100 h-100 p-1"
                      ></img>{" "}
                      <div
                        className="position-absolute bottom-0 end-0 cursor-pointer trash-icon-container"
                        onClick={deleteImg2}
                      >
                        <Image src={TrashIcon} width={30} height={30}></Image>
                      </div>
                    </div>
                  </div>
                )}

                {!imageSrc3 ? (
                  <div
                    className="col-xl-6 pe-0 ps-0 ps-xl-3"
                    onClick={() => {
                      setDisplayFormFile(!displayFormFile);
                    }}
                  >
                    <div className="col-12 rounded seventh-color-background add-file-container position-relative cursor-pointer">
                      <div className="position-absolute d-flex flex-column start-50 top-50 translate-middle">
                        <p className="poppins-regular third-color mb-2 nowrap fs-4">
                          Ajouter une image
                        </p>
                        <div>
                          <Image src={AddImageIcon}></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-xl-6 mb-4 mt-4 mt-xl-0">
                    <div className="col-12 rounded border border-3 add-file-container position-relative">
                      <img
                        src={imageSrc3}
                        className="object-fit-cover w-100 h-100 p-1"
                      ></img>
                      <div
                        className="position-absolute bottom-0 end-0 cursor-pointer trash-icon-container"
                        onClick={deleteImg3}
                      >
                        <Image src={TrashIcon} width={30} height={30}></Image>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {displayFormFile && (
            <form className="col-10 col-md-8 col-xl-4 my-5">
              <label
                htmlFor="formFile"
                className="form-label poppins-regular mb-2 fs-5"
              >
                Choisissez une image :
              </label>
              <br />
              {imageSrc && selectedFile && (
                <Image src={imageSrc} width={80} height={80}></Image>
              )}
              <input
                className="form-control mt-2"
                type="file"
                id="formFile"
                onChange={(e) => {
                  setSelectedFile(e.target.files[0]);
                }}
              />
              <button
                type="submit"
                className="btn poppins-regular form-file-btn mt-4"
                onClick={addImageUrl}
              >
                Envoyer l'image
              </button>
            </form>
          )}
        </div>
        <div className="col-10">
          <button
            type="submit"
            className="btn poppins-regular form-file-btn mt-4"
            onClick={submitAnnonce}
          >
            Poster l'annonce
          </button>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div>
        <h1 className=" col-10 mx-auto text-center poppins-semibold my-5">
          Veuillez vous connecter pour publier une annonce
        </h1>
        <Login></Login>
      </div>
    );
  }
}
