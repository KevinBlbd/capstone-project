import styled from "styled-components";
import { useState } from "react";
import Gallery from "@/components/Gallery";
import Form from "@/components/Form/index.js";
import {
  StyleGallery,
  StyleHeader,
  StyleAround,
  StylePopup,
} from "@/components/StyleMain";
import { uid } from "uid";
import { pieces } from "/components/pieces";
import { StyledButton, StyledOpenFormButton } from "@/components/StyledButton";

export default function HomePage() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [piece, setPiece] = useState(pieces);

  function handleModalIsVisible() {
    setModalIsVisible(!modalIsVisible);
  }

  function handleAddPiece(newPiece) {
    setPiece([...piece, { ...newPiece, id: uid() }]);
    // }
    // function handleCloseModal() {
    setModalIsVisible();
  }
  return (
    <div>
      <StyleHeader>Street Art Gallery</StyleHeader>
      <StyleAround> Around me</StyleAround>
      <StyleGallery>
        <Gallery piece={piece} />
      </StyleGallery>
      <StyledOpenFormButton type="button" onClick={handleModalIsVisible}>
        +
      </StyledOpenFormButton>

      {modalIsVisible && (
        <StylePopup>
          <Form onAddPiece={handleAddPiece} onClick={handleModalIsVisible} />
          {""}
        </StylePopup>
      )}
    </div>
  );
}

// onCloseModal={handleCloseModal}
