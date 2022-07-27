import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'What number is missing in the progression?';
const createProgression = (firstNumber, step, length) => {
  const arr = [];
  for (let i = 0; i <= length; i += 1) {
    const result = firstNumber + (i * step);
    arr.push(result);
  }
  return arr;
};

const generateRound = () => {
  const step = getRandomNumber(2, 13);
  const randomLength = getRandomNumber(10, 13);
  const firstNumber = getRandomNumber(1, 15);

  const progression = createProgression(firstNumber, step, randomLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const removed = progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  const rightAnswer = String(removed);
  return [question, rightAnswer];
};
const startGame = () => play(description, generateRound);
export default startGame;
