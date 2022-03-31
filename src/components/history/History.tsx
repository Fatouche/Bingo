import { Line, Wrapper } from "./History.style";

type Props = {
  currentGame: Array<number>;
  games: Array<Array<number>>;
};

export const History = ({ currentGame, games }: Props) => {
  return (
    <Wrapper>
      <Line>
        <span>Partie courante:</span>
        <span>{currentGame.map((number) => number + " ")} </span>
      </Line>
      {games.map((game, index) => (
        <Line>
          <span>Partie n°{games.length - index}</span>
          <span>{game.map((number) => number + " ")}</span>
        </Line>
      ))}
    </Wrapper>
  );
};
