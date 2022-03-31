import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: space-around;
`;

export const Board = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-around;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(9, 1fr);
  width: 50%;
  justify-items: center;
  grid-gap: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem 2rem 1rem 2rem;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  span {
    font-weight: bold;
    font-size: 5rem;
  }
`;

export const Actions = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;

  button {
    font-size: 1rem;
  }
`;

export const HistorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
