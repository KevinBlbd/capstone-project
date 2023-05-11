import { uid } from "uid";
import { useState } from "react";
import Gallery from "@/components/Gallery";
import Form from "@/components/Form/index.js";
import {
  StyleGallery,
  StyleHeader,
  StyleAround,
  StylePopup,
  Backdrop,
} from "@/components/StyleMain";

import { StyledOpenFormButton } from "@/components/StyledButton";

export default function HomePage({ setNewPieces, newPieces }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleModalIsVisible() {
    setModalIsVisible(!modalIsVisible);
  }

  function handleAddPiece(newPiece) {
    setNewPieces((prevPieces) => [...prevPieces, { ...newPiece, id: uid() }]);
    setModalIsVisible(false);
  }

  // function handleDeletePiece(idToRemove) {
  //   setPiece(data.filter((x) => x.id !== idToRemove));
  //   router.push("/");
  // }

  return (
    <div>
      <StyleHeader>STREET ART// gallery</StyleHeader>

      <StyleGallery>
        <StyleAround>new</StyleAround>
        <Gallery newPieces={newPieces} />
      </StyleGallery>
      <StyledOpenFormButton
        type="button"
        onClick={handleModalIsVisible}
        modalIsVisible={modalIsVisible}
      >
        +
      </StyledOpenFormButton>

      {modalIsVisible && (
        <>
          <StylePopup>
            <Form onAddPiece={handleAddPiece} onClick={handleModalIsVisible} />
          </StylePopup>
          <Backdrop />
        </>
      )}
    </div>
  );
}

// handleDeletePiece={handleDeletePiece}
