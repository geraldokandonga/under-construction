import React from "react";
import UCImage from "../../assets/images/under-construction.png";
import CookingGif from "../../assets/images/cooking-gif.gif";
import {
  FooterContainer,
  FooterContent,
  FooterWrapper,
  Image,
  ImageContainer,
  TextContainer,
  TitleText,
  Text,
} from "./FooterElement";

const FooterView = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterWrapper>
          <ImageContainer>
            <Image src={CookingGif} />
          </ImageContainer>
        </FooterWrapper>
        <FooterWrapper>
          <TextContainer>
            <TitleText>Website still COOKING ...</TitleText>
            <Text>We're quickly busy cooking this website!</Text>
            <Text>It's exciting right here in the kitchen</Text>
            <Text>Please visit back later. The food is still hot!</Text>
          </TextContainer>
        </FooterWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterView;
