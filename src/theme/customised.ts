import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  width: 20%;
`;

export const Div = styled("h3")`
  ...theme.typography.button;
margin: 1rem 0rem 0rem 0rem;
  `;

export const ToDoStack = styled(Stack)`
  padding: 2rem 7rem;
  border: 2px solid black;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
  height: 100%;
`;

export const Wrapper = styled.div`
  background: "#15005b";
  height: 100%;
  padding: 0rem 0rem 20rem 0rem;
`;

export const ListBox = styled.div`
  padding: 2rem 7rem;
  border: 2px solid black;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 4em;
  opacity: 0.35;
  text-align: center;
  margin: 0em 0em;
  font-family: "Lucida Handwriting";
  color: "#afd7e3";
  @media (max-width: 768px) {
    font-size: 2em;
  }
`;
