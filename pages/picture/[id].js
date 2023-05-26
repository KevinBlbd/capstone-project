import { useRouter } from "next/router";
import Image from "next/image";
import { StyledBackLink, StyledButton } from "@/components/StyledButton";
import {
  StyleDetail,
  detailInfos,
  detailInfosImp,
} from "@/components/StyleMain";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function PictureDetail({ newPieces, handleDeletePiece }) {
  const router = useRouter();
  const { id } = router.query;
  const picture = newPieces.find((piece) => piece.id === id);

  if (!picture) {
    return <div>Picture not found</div>;
  }

  return (
    <>
      <StyledBackLink href="/">←</StyledBackLink>
      <StyleDetail>
        <StyledImage
          width={375}
          height={500}
          src={picture.image}
          alt={picture.location}
        />
        <detailInfos>Artist name: {picture.artistName}</detailInfos>
        <detailInfos>location: {picture.location}</detailInfos>
        <detailInfos>type: {picture.type}</detailInfos>
      </StyleDetail>
    </>
  );
}
