import styled from "styled-components";
import Gallery from "@/components/Gallery";

const StyleGallery = styled.div`
  display: flex;
  justify-content: center;
`;

const StyleHeader = styled.h1`
  margin-top: 0rem;
  margin-left: 0rem;
  font-size: 20px;
  text-align: center;
`;

const StyleAround = styled.p`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 0rem;
  font-weight: bold;
`;

export default function HomePage() {
  return (
    <div>
      <StyleHeader>Street Art Gallery</StyleHeader>
      <StyleAround> Around me</StyleAround>
      <StyleGallery>
        <Gallery />
      </StyleGallery>
    </div>
  );
}
