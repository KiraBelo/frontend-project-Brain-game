import {getRandomNumber} from '../utils.js';
import play from '../index.js';

const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const minRange = 1;
const maxRange = 100;
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const question = String(number);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);

export default startGame;
