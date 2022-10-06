import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/images/logo/logo-min.svg";
import Image from "next/image";
import { useRouter } from "next/router";

import { deconnexion } from "../../feature/connexionStatusSlice";
import { deleteSimleUserData } from "../../feature/simpleUserData";

import { useSelector, useDispatch } from "react-redux";

export default function principalNavbar() {
  const isConnected = useSelector((state) => state.isConnected.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const [navActive, setNavActive] = useState(null);

  const disconnect = (e) => {
    e.preventDefault();
    dispatch(deconnexion());
    dispatch(deleteSimleUserData());
    alert("Vous êtes déconnecté");
    router.push("/");
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setNavActive(null);
    });
  }, []);

  return (
    <div className="nav-container">
      <nav className="principal-navbar ">
        <div>
          <Link href={"/"}>
            <a href="">
              <Image src={Logo} alt="Logo du site" />
            </a>
          </Link>
        </div>
        <div
          className={`${navActive ? "active" : ""} bars-solid`}
          onClick={() => {
            setNavActive(!navActive);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`${navActive ? "active" : ""} ul-style`}>
          <li>
            <Link href="/">
              <a href="">Annonces</a>
            </Link>
          </li>
          <hr />
          <li>
            <a href="">Publier une annonce</a>
          </li>
          <hr />
          {isConnected ? (
            <li>
              <Link href="/account/simpleUser">
                <a href="">Mon compte</a>
              </Link>
            </li>
          ) : null}
          {isConnected ? <hr /> : null}
          <li>
            <Link href="/apropos">
              <a href="">&Agrave; propos</a>
            </Link>
          </li>
        </ul>
        {isConnected ? (
          <button onClick={disconnect}>
            <a>Se déconnecter</a>
          </button>
        ) : (
          <button>
            <Link href="/connexion">
              <a>Se connecter</a>
            </Link>
          </button>
        )}
      </nav>
    </div>
  );
}
