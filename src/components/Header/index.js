import React from "react";
import logoImage from "../../assets/images/logo.png";
import iconImage from "../../assets/images/icon.png";
import {
  HeaderContainer,
  HeaderContent,
  HeaderWrapper,
  Image,
  ImageContainer,
  TitleText,
} from "./HeaderElement";

const HeaderView = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderWrapper>
          <ImageContainer>
            <Image src={logoImage} />
          </ImageContainer>
        </HeaderWrapper>
        <HeaderWrapper>
          <TitleText>City Striders Club</TitleText>
        </HeaderWrapper>
        <HeaderWrapper>
          <ImageContainer>
            <Image src={iconImage} />
          </ImageContainer>
        </HeaderWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderView;
