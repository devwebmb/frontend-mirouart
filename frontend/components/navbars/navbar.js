import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/images/logo/logo-min.svg";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { connexion, deconnexion } from "../../slices/connexionStatusSlice";

export default function navbar() {
  const connectStatus = useSelector((state) => state.isConnected.value);
  const dispatch = useDispatch();

  const [navActive, setNavActive] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setNavActive(null);
    });
  }, []);

  return (
    <div>
      <nav className="principal-navbar ">
        <div>
          <Image src={Logo} alt="" />
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
          {connectStatus ? (
            <li>
              <a href="">Mon compte</a>
            </li>
          ) : null}
          {connectStatus ? <hr /> : null}
          <li>
            <Link href="/apropos">
              <a href="">&Agrave; propos</a>
            </Link>
          </li>
        </ul>
        <button>
          <Link href="/connexion">
            <a>{connectStatus ? "Se déconnecter" : "Se connecter"}</a>
          </Link>
        </button>
      </nav>
    </div>
  );
}
