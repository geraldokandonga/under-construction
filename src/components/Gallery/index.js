import React from "react";
import Img1 from "../../assets/images/card/card-img-1.png";
import Img2 from "../../assets/images/card/card-img-2.png";
import Img3 from "../../assets/images/card/card-img-3.png";

import Card from "../Card";

import {
  GalleryContainer,
  GalleryContent,
  GalleryWrapper,
} from "./GalleryElement";

const GalleryView = (props) => {
  return (
    <GalleryContainer>
      <GalleryContent>
        <GalleryWrapper>
          <Card image={Img1} />
        </GalleryWrapper>
        <GalleryWrapper>
          <Card image={Img3} />
        </GalleryWrapper>
        <GalleryWrapper>
          <Card image={Img2} />
        </GalleryWrapper>
      </GalleryContent>
    </GalleryContainer>
  );
};

export default GalleryView;
