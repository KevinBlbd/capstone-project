import { useRouter } from "next/router";
import { pieces } from "/components/pieces";
import Image from "next/image";
import { StyledBackLink } from "@/components/StyledButton";
import { StyleDetail } from "@/components/StyleMain";

export default function PictureDetail() {
  const router = useRouter();
  const { id } = router.query;
  const picture = pieces.find((piece) => piece.id === id);

  if (!picture) {
    return <div>Picture not found</div>;
  }
  function handleBack() {
    router.push("/");
  }

  return (
    <>
      {/* <StyledBackButton onClick={handleBack}>Back</StyledBackButton> */}
      <StyledBackLink href="/">Back</StyledBackLink>
      <StyleDetail>
        <Image
          width={300}
          height={300}
          src={picture.image}
          alt={picture.location}
        />
        <h2>artist name : {picture.artistName}</h2>
        <p>location : {picture.location}</p>
        <p>type : {picture.type}</p>
        <p>{picture.name}</p>
      </StyleDetail>
    </>
  );
}
