import styled from "styled-components";

export const GalleryContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  transition: all 0.3s ease;

  @media (max-width: 56.25em) {
    flex-direction: column;
  }
`;
