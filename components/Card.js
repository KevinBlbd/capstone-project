import GlobalStyle from "../styles";
import Image from "next/image";
import styled from "styled-components";

const StyleImage = styled(Image)`
  border-radius: 15px;
  margin-top: 1rem;
  margin-left: -1rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

export default function Card({ id, location, type, image }) {
  return (
    <>
      {/* --- to show details uncomment
        {id} {location} {type} */}

      <StyleImage src={image} alt="sample image" width="300" height="120" />
    </>
  );
}
