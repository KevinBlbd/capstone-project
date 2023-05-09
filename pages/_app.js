import { useState } from "react";
import GlobalStyle from "../styles";
import Gallery from "@/components/Gallery";
import Card from "@/components/Card";
import { data } from "@/components/data";

export default function App({ Component, pageProps, onAddPiece }) {
  const [newPieces, setNewPieces] = useState(data);
  const [pieces, setPieces] = useState(data);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        setPieces={setPieces}
        onAddPiece={onAddPiece}
        newPieces={newPieces}
        setNewPieces={setNewPieces}
      />
    </>
  );
}
