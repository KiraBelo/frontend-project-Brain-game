import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'What is the result of the expression?';
const minRange = 1;
const maxRange = 50;
const operators = ['*', '-', '+'];

const operation = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};
const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = String(operation(number1, number2, operator));
  return [question, rightAnswer];
};

const startGame = () => play(description, generateRound);
export default startGame;
