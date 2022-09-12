import React from "react";
import { Fade } from "react-reveal";

import FooterView from "../components/Footer";
import HeaderView from "../components/Header";
import GalleryView from "../components/Gallery";

export default function HomePage() {
  return (
    <>
      <Fade top>
        <HeaderView />
      </Fade>
      <Fade clear>
        <GalleryView />
      </Fade>
      <Fade bottom>
        <FooterView />
      </Fade>
    </>
  );
}
