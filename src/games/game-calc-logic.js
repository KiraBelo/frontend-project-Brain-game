import randomNumber from '../randomNumber.js';
import play from '../index.js';

const description = 'What is the result of the expression?';

const signs = ['*', '-', '+'];

const calculate = (number1, sign, number2) => {
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
const generateRound = () => {
  const number1 = randomNumber(1, 50);
  const number2 = randomNumber(1, 50);
  const randomSign = signs[randomNumber(0, signs.length - 1)];
  const question = `${number1} ${randomSign} ${number2}`;
  const rightAnswer = calculate(number1, randomSign, number2).toString();
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);
export default startGame;
