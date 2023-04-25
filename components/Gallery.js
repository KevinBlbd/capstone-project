import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "./Card";

const StyleNoneList = styled.li`
  list-style: none;
`;

export default function Gallery() {
  const pieces = [
    {
      id: 1,
      location: "Hamburg",
      type: "tag",
      image:
        "https://images.unsplash.com/photo-1547417584-12db672469b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: 2,
      location: "Paris",
      type: "stencil",
      image:
        "https://images.unsplash.com/photo-1600941039083-f75f3e8de948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    },
    {
      id: 3,
      location: "Berlin",
      type: "graffiti",
      image:
        "https://images.unsplash.com/photo-1529956918443-5713f44f247f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      location: "Barcelona",
      type: "collage",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Swoon.JPG",
    },
  ];

  return (
    <ul className="gallery">
      {pieces.map((piece) => {
        return (
          <StyleNoneList key={pieces.id}>
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
