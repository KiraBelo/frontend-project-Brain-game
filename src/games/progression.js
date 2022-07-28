import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 15;
const minStep = 2;
const maxStep = 13;
const minLength = 10;
const maxLength = 14;

const createProgression = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    const result = firstNumber + (i * step);
    progression.push(result);
  }
  return progression;
};

const generateRound = () => {
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const firstNumber = getRandomNumber(minRange, maxRange);
  const progression = createProgression(firstNumber, step, length);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const removed = progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  const rightAnswer = String(removed);
  return [question, rightAnswer];
};
const startGame = () => play(description, generateRound);
export default startGame;
