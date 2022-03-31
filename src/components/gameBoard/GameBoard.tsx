import React from "react";
import { NumberCard } from "../numberCard/NumberCard";
import { History } from "../history/History";
import {
  Actions,
  Aside,
  Board,
  Container,
  HistorySection,
  Wrapper,
} from "./GameBoard.style";

export const GameBoard = () => {
  const [numbers, setNumbers] = React.useState<
    Array<{ textNumber: number; disabled: boolean }>
  >([]);
  const [numbersOut, setNumbersOut] = React.useState<number[]>([]);
  const [randomNumber, setRandomNumber] = React.useState<number>(0);
  const [disabledButton, setDisabledButton] = React.useState(false);
  const [games, setGames] = React.useState<Array<Array<number>>>([]);

  const generateNumber = () =>
    Array.from(Array(90).keys(), (x) => ({
      textNumber: x + 1,
      disabled: true,
    }));

  React.useEffect(() => {
    setNumbers(generateNumber);
  }, []);

  const reset = () => {
    setNumbers(generateNumber);
    setGames([numbersOut, ...games]);
    setDisabledButton(false);
    setNumbersOut([]);
    setRandomNumber(0);
  };
  function randomIntFromInterval(max: number) {
    return Math.floor(Math.random() * max);
  }

  const generateRandomNumber = () => {
    const availableNumber = numbers.filter((current) => current.disabled);
    const random =
      availableNumber[randomIntFromInterval(availableNumber.length)];

    setRandomNumber(random.textNumber);
    setNumbersOut([...numbersOut, random.textNumber]);
    availableNumber.length === 1
      ? setDisabledButton(true)
      : setDisabledButton(false);
    numbers[random.textNumber - 1].disabled = false;
  };

  return (
    <Wrapper>
      <Board>
        <Container>
          {numbers.map((number) => (
            <NumberCard
              key={number.textNumber}
              numberText={number.textNumber}
              disabled={number.disabled}
            />
          ))}
        </Container>
        <Aside>
          <span>{randomNumber}</span>
          <Actions>
            <button onClick={generateRandomNumber} disabled={disabledButton}>
              Numéro Suivant
            </button>
            <button onClick={reset} disabled={numbersOut.length === 0}>
              Nouvelle Partie
            </button>
          </Actions>
        </Aside>
      </Board>
      <HistorySection>
        <History currentGame={numbersOut} games={games} />
      </HistorySection>
    </Wrapper>
  );
};
