import { getRandomNumber } from '../utils.js';
import play from '../index.js';

const description = 'Answer \'yes\' if the number is prime, otherwise answer \'no\'.';
const minRange = 1;
const maxRange = 100;

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const question = String(number);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);
export default startGame;
