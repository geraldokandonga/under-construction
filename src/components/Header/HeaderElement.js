import styled from "styled-components";
import bgImage from "../../assets/images/bg.jpg";

export const HeaderContainer = styled.header`
  position: relative;
  background-color: #283472;
  transition: background-color 300ms ease-out 0s;
  border-top: 3px solid #0a4cc0;
  transition: all 0.3s ease;
`;

export const HeaderWrapper = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(40, 51, 113, 0.4),
      rgba(40, 51, 113, 0.4)
    ),
    url(${bgImage});
  background-size: cover;
  background-position: top;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-repeat: no-repeat;
  -o-background-size: cover;
  position: relative;
  padding: 4rem 1rem;
  transition: background-color 300ms ease-out 0s;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 56.25em) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const TitleText = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 900;
  font-size: 4.6875rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 56.25em) {
    font-size: 3.6875rem;
  }
`;
