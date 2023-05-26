import styled from "styled-components";
import Link from "next/link";

export const StyledButton = styled.button`
  appearance: none;
  border: none;
  background-color: #cc14e3;
  width: fit-content;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.8rem;
  align-self: flex-end;
  font-family: "Gill Sans";
`;

export const StyledOpenFormButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 20px;
  padding: 1.6rem;
  background: transparent;
  color: ${({ modalIsVisible }) => (modalIsVisible ? "#00ff21" : "#f900ff")};
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: 10rem;
  margin-left: 22rem;
  margin-top: 0rem;
  text-shadow: ${({ modalIsVisible }) =>
    modalIsVisible
      ? "3px 3px 0px #f900ff, 5px 5px 0px yellow"
      : "3px 3px 0px #00ff21, 5px 5px 0px yellow"};

  &:hover {
    color: #00ff21;
    transform: scale(1.3);
    text-shadow: 3px 3px 0px #f900ff, 5px 5px 0px yellow;
  }
`;

export const StyledBackLink = styled(Link)`
  position: fixed;
  color: #f900ff;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: 3rem;
  text-shadow: 2px 2px 0px #00ff21, 4px 4px 0px yellow, 5px 5px 10px black;
`;

export const StyledDropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #f5f5f5;
  color: #333;
  margin-right: 1rem;
`;

export const StyledDropdownOption = styled.option`
  font-size: 1rem;
`;
