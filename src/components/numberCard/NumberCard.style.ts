import styled, { css } from "styled-components";

type CustomProps = {
  disabled: boolean;
};
export const Wrapper = styled.div<CustomProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  height: 3rem;
  width: 3rem;
  ${(props: CustomProps) =>
    props.disabled
      ? css`
          border: 1px solid grey;
          color: grey;
          opacity: 0.5;
        `
      : css`
          border: 1px solid green;
          color: green;
          background-color: greenyellow;
        `}
`;
