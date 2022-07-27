import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'What is the result of the expression?';
const minRange = 1;
const maxRange = 50;
const number1 = getRandomNumber(minRange, maxRange);
const number2 = getRandomNumber(minRange, maxRange);
const operators = ['*', '-', '+'];

const operation = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};
const generateRound = () => {
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const rightAnswer = operation(number1, randomOperator, number2).toString();
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);
export default startGame;
