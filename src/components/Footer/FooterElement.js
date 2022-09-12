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
  justify-content: center;
  align-items: center;

  @media (max-width: 56.25em) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 2px;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 1px 35px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  @media (max-width: 56.25em) {
    justify-content: center;
    align-items: center;
  }
`;

export const TitleText = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  color: #283472;
  text-align: center;

  @media (max-width: 56.25em) {
    font-size: 2rem;
    margin-top: 1.5rem;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-size: 1.1rem;
  color: #000;
  line-height: 1.6;

  @media (max-width: 56.25em) {
    font-size: 1rem;
  }
`;
