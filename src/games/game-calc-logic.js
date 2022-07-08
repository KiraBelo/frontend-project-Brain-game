import randomNumber from '../randomNumber.js';
import randomSign from '../randOperation.js';
import gameEngine from '../index.js';

const gameRule = 'What is the result of the expression?';
const calculator = (number1, sign, number2) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return number1 * number2;
  }
};

const gameRound = () => {
  const number1 = randomNumber(1, 50);
  const number2 = randomNumber(1, 50);
  const sign = randomSign(['*', '-', '+']);
  const question = `${number1} ${sign} ${number2}`;
  const rightAnswer = `${calculator(number1, sign, number2)}`;
  return [question, rightAnswer];
};

const startGame = () => gameEngine(gameRule, gameRound);
export default startGame;
