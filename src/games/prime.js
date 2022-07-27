import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'Answer \'yes\' if the number is prime, otherwise answer \'no\'.';
const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);
export default startGame;
