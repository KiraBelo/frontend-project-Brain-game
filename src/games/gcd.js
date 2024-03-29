import { getRandomNumber } from '../utils.js';
import play from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 50;

const getGcd = (x, y) => ((y > 0) ? getGcd(y, x % y) : x);

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGcd(number1, number2));
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);
export default startGame;
