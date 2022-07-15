import randomNumber from '../randomNumber.js';
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
  const step = randomNumber(2, 13);
  const randomLength = randomNumber(10, 13);
  const firstNumber = randomNumber(1, 15);

  const progression = createProgression(firstNumber, step, randomLength);
  const randomIndex = randomNumber(0, progression.length - 1);

  const removed = progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  const rightAnswer = String(removed);
  return [question, rightAnswer];
};
const startGame = () => play(description, generateRound);
export default startGame;
