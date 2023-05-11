import styled from "styled-components";
import Image from "next/image";

const StyleImage = styled(Image)`
  border-radius: 15px;
  margin-top: 1rem;
  margin-left: 0rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

export default function Card({ id, location, type, image }) {
  return (
    /* --- to show details of the pictures on the homepage (location, type) uncomment ----
        {id} {location} {type} */

    <StyleImage src={image} alt="sample image" width="340" height="120" />
  );
}
