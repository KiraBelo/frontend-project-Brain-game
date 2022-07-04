import randomNumber from '../randomNumber.js';
import gameEngine from '../index.js';

const gameRule = 'Answer \'yes\' if the number is prime, otherwise answer \'no\'.';
const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const gameRound = () => {
  const number = randomNumber(1, 100);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainPrime = () => gameEngine(gameRule, gameRound);
export default brainPrime;
