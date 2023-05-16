import { uid } from "uid";
import { useState } from "react";
import Gallery from "@/components/Gallery";
import Form from "@/components/Form/index.js";
import {
  StyleGallery,
  StyleHeader,
  StylePopup,
  Backdrop,
  StyleTitle,
} from "@/components/StyleMain";
import newImage from "@/public/newh.png";
import logo from "@/public/streetart5.png";
import Image from "next/image";

import { StyledOpenFormButton } from "@/components/StyledButton";

export default function HomePage({ setNewPieces, newPieces }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleModalIsVisible() {
    setModalIsVisible(!modalIsVisible);
  }

  function handleAddPiece(newPiece) {
    setNewPieces((prevPieces) => [{ ...newPiece, id: uid() }, ...prevPieces]);
    setModalIsVisible(false);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Image
          src={logo}
          alt="new"
          style={{ display: "inline-block", width: "60%", height: "60%" }}
        />
        <StyleHeader>GALLERY</StyleHeader>
      </div>
      <div>
        <Image
          src={newImage}
          alt="new"
          style={{ display: "inline-block", width: "25%", height: "25%" }}
        />
      </div>
      <StyleGallery>
        <StyleTitle>///////////////////////</StyleTitle>

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
