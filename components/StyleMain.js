import styled from "styled-components";

export const StyleGallery = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyleHeader = styled.h1`
  margin-top: 0rem;
  margin-left: 0rem;
  font-size: 20px;
  text-align: center;
`;

export const StyleAround = styled.p`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 0rem;
  font-weight: bold;
  width: screen;
`;

export const StylePopup = styled.div`
  position: fixed;
  inset: 10vh 10vw;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  max-height: 600px;
  max-width: 600px;
`;

export const StyledModal = styled.div`
  position: fixed;
  inset: 10vh 10vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2rem;
  max-height: 200px;
`;
