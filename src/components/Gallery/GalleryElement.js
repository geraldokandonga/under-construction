import styled from "styled-components";

export const GalleryContainer = styled.div`
  position: relative;
  margin-top: 2rem;

  @media (max-width: 56.25em) {
    margin-top: 1.5rem;
  }
`;

export const GalleryWrapper = styled.div`
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;

export const GalleryContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  transition: all 0.3s ease;

  @media (max-width: 56.25em) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
`;
