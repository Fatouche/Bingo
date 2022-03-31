import { Wrapper } from "./NumberCard.style";

type Props = {
  numberText: number;
  disabled: boolean;
};

export const NumberCard = ({ numberText, disabled }: Props) => {
  return <Wrapper disabled={disabled}>{numberText}</Wrapper>;
};
