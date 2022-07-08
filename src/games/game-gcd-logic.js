import randomNumber from '../randomNumber.js';
import gameEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  if (number2 > 0) {
    return getGcd(number2, number1 % number2);
  }
  return number1;
};

const gameRound = () => {
  const number1 = randomNumber(1, 50);
  const number2 = randomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const rightAnswer = `${getGcd(number1, number2)}`;
  return [question, rightAnswer];
};

const startGame = () => gameEngine(gameRule, gameRound);
export default startGame;
