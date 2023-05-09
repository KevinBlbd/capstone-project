import { uid } from "uid";
import { useState } from "react";
import Gallery from "@/components/Gallery";
import Form from "@/components/Form/index.js";
import {
  StyleGallery,
  StyleHeader,
  StyleAround,
  StylePopup,
} from "@/components/StyleMain";

import { StyledOpenFormButton } from "@/components/StyledButton";
import { data } from "@/components/data";

export default function HomePage({ piece, setPiece, setNewPieces, newPieces }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleModalIsVisible() {
    setModalIsVisible(!modalIsVisible);
  }

  function handleAddPiece(newPiece) {
    setNewPieces([...data, { ...newPiece, id: uid() }]);
    setModalIsVisible();
  }

  return (
    <div>
      <StyleHeader>Street Art Gallery</StyleHeader>
      <StyleAround> Around me</StyleAround>
      <StyleGallery>
        <Gallery newPieces={newPieces} />
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
