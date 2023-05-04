import styled from "styled-components";
import Card from "../Card";
import { pieces } from "../pieces";

const StyleNoneList = styled.li`
  list-style: none;
`;

export default function Gallery({ piece }) {
  return (
    <ul className="gallery">
      {piece.map((piece) => {
        return (
          <StyleNoneList key={piece.id}>
            <Card
              id={piece.id}
              location={piece.location}
              type={piece.type}
              image={piece.image}
            />
          </StyleNoneList>
        );
      })}
    </ul>
  );
}
