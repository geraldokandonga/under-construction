import React from "react";
import emoji from "emoji-dictionary";

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
  const fire = emoji.getUnicode("fire");

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
            <TitleText> 👨‍🍳 Website still COOKING 👨‍🍳</TitleText>
            <Text>We're quickly busy cooking this website!</Text>
            <Text>It's exciting right here in the kitchen.</Text>
            <Text>Please visit back later. The food is still hot {fire}</Text>
          </TextContainer>
        </FooterWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterView;
