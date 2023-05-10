import { useState } from "react";
import GlobalStyle from "../styles";
import { data } from "@/components/data";

export default function App({ Component, pageProps, onAddPiece }) {
  const [newPieces, setNewPieces] = useState(data);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onAddPiece={onAddPiece}
        newPieces={newPieces}
        setNewPieces={setNewPieces}
      />
    </>
  );
}
