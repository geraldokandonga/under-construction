import React from "react";
import Img1 from "../../assets/images/card/card-img-1.JPG";
import Img2 from "../../assets/images/card/card-img-2.JPG";
import Img3 from "../../assets/images/card/card-img-3.jpg";

import Card from "../Card";

import { GalleryContainer } from "./GalleryElement";

const GalleryView = (props) => {
  return (
    <GalleryContainer>
      <Card image={Img1} />
      <Card image={Img3} />
      <Card image={Img2} />
    </GalleryContainer>
  );
};

export default GalleryView;
