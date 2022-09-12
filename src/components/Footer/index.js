import React from "react";
import UCImage from "../../assets/images/under-construction.png";
import {
  FooterContainer,
  FooterContent,
  FooterWrapper,
  Image,
  ImageContainer,
  TitleText,
} from "./FooterElement";

const FooterView = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterWrapper>
          <ImageContainer>
            <Image src={UCImage} />
          </ImageContainer>
        </FooterWrapper>
        <FooterWrapper>
          <TitleText>This site is under construction</TitleText>
        </FooterWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterView;
