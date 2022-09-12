import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  border-bottom: 5px solid #0a4cc0;
  transition: all 0.3s ease;
  margin-top: 4rem;
  padding: 2rem 0;
`;

export const FooterWrapper = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const FooterContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 56.25em) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TitleText = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 2.8125rem;
  color: #283472;
  text-align: center;

  @media (max-width: 56.25em) {
    font-size: 1.6875rem;
  }
`;
