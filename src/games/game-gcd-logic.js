import randomNumber from '../randomNumber.js';
import play from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  if (number2 > 0) {
    return getGcd(number2, number1 % number2);
  }
  return number1;
};

const generateRound = () => {
  const number1 = randomNumber(1, 50);
  const number2 = randomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGcd(number1, number2));
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);
export default startGame;
