import styled from "styled-components";

export const StyleGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyleHeader = styled.h1`
  margin-top: 0rem;
  margin-left: 0rem;
  font-size: 3rem;
  font-family: "Gill Sans";
  text-align: center;
  color: yellow;
  text-shadow: 2px 2px 0px #00ff21, 5px 5px 0px #f900ff;
`;

export const StyleAround = styled.p`
  color: #00ff21;
  background: #f900ff;
  width: 50%;
  align-self: flex-start;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  margin: 0;
  font-weight: bold;
`;

export const StylePopup = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  inset: 10vh 10vw;
  background-color: #171f26;
  color: #00ff21;
  border: 3px dashed #00ff21;
`;

// export const StyledModal = styled.div`
//   position: fixed;
//   inset: 10vh 10vw;
//   background-color: black;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   border-radius: 0rem;
//   max-height: 2000px;
// `;

export const StyleDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.7;
`;
