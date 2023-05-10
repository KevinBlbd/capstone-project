import Link from "next/link";
import styled from "styled-components";
import Card from "../Card";

const StyleNoneList = styled.li`
  list-style: none;
  padding-left: 0rem;
  margin: 0;
`;
const StyleList = styled.ul`
  padding-left: 0;
`;

export default function Gallery({ newPieces }) {
  return (
    <StyleList className="gallery">
      {newPieces.map((piece) => {
        return (
          <StyleNoneList key={piece.id}>
            <Link href={`/picture/${piece.id}`}>
              <div>
                <Card
                  id={piece.id}
                  location={piece.location}
                  type={piece.type}
                  image={piece.image}
                />
              </div>
            </Link>
          </StyleNoneList>
        );
      })}
    </StyleList>
  );
}
