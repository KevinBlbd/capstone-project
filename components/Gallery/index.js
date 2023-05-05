import styled from "styled-components";
import Card from "../Card";
import { pieces } from "../pieces";

const StyleNoneList = styled.li`
  list-style: none;
  padding-left: 0rem;
  margin: 0;
`;
const StyleList = styled.ul`
  padding-left: 0;
`;

export default function Gallery({ piece }) {
  return (
    <StyleList className="gallery">
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
    </StyleList>
  );
}
