import styled from "styled-components";
import Image from "next/image";

const StyleImage = styled(Image)`
  object-fit: cover;
`;

export default function Card({ id, location, type, image }) {
  return (
    /* --- to show details of the pictures on the homepage (location, type) uncomment ----
        {id} {location} {type} */

    <StyleImage src={image} alt="sample image" width="350" height="200" />
  );
}
