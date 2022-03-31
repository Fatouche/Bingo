import styled from "styled-components";

export const Wrapper = styled.ul`
  border: 1px solid black;
  list-style: none;
  width: 50%;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px lightgrey;
`;

export const Line = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border-bottom: 0.5px solid;
  &:last-child {
    border-bottom: none;
  }
`;
