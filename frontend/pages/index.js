import Head from "next/head";
import Image from "next/image";
import AllAnnoncesView from "../components/annonces-page/AllAnnoncesView";

import Navbar from "../components/navbars/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AllAnnoncesView />
    </div>
  );
}
