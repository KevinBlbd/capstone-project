import styled from "styled-components";

export const StyleGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyleHeader = styled.h1`
  margin-top: -0.5rem;
  margin-left: 0rem;
  font-size: 2rem;
  font-family: "Gill Sans";
  text-align: center;
  color: #cc14e3;
  text-shadow: 1px 1px 0px yellow, -1px -1px 0px cyan;
`;

export const StyleTitle = styled.p`
  color: #00ff21;
  background: #cc14e3;
  background-size: 100%;

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
  inset: 23vh 10vw;
  background-color: #171f26;
  color: #00ff21;
  border: 3px dashed #00ff21;
`;

export const StyleDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Gill Sans";
  color: #cc14e3;
  padding: 0rem;
  padding-bottom: 6rem;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
`;

export const detailInfos = styled.p`
  padding: 8rem;
  font-family: "Gill Sans";
  font-size: 1.5rem;
`;

export const detailInfosImp = styled.p`
  padding: 0.5rem;
  font-size: 2rem;
  color: #8423fa;
`;

export const formStyle = styled.label`
  font-family: "Gill Sans";
`;
