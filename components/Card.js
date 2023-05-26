import styled from "styled-components";
import Image from "next/image";
import css from "styled-jsx/css";

const StyleImage = styled(Image)`
  object-fit: cover;
  ${(props) =>
    css`
      transition: all 0.1s ease-in;
    `}

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Card({ image }) {
  return (
    <StyleImage
      src={image}
      alt="sample image"
      width="375"
      height="150"
      margin-top="100"
    />
  );
}
