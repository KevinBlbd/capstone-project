import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledButton = styled.button`
  background-color: lightgreen;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
`;

export const StyledOpenFormButton = styled.button`
  background-color: lightblue;
  padding: 1.6rem;
  border-radius: 2.3rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  position: flex;
  margin-left: 22rem;
  margin-top: 0rem;
`;

export const StyledBackLink = styled(Link)`
  background-color: lightblue;
  padding: 1.6rem;
  border-radius: 2.3rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  position: flex;
  margin-left: 0rem;
  margin-top: 0rem;
`;
