import randomNumber from '../randomNumber.js';
import play from '../index.js';

const description = 'What number is missing in the progression?';
const makeProgression = (startProgression, progressionStep, progressionLength) => {
  const arr = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const result = startProgression + (i * progressionStep);
    arr.push(result);
  }
  return arr;
};

const generateRound = () => {
  const step = randomNumber(2, 13);
  const randomLength = randomNumber(10, 13);
  const firstNumber = randomNumber(1, 15);

  const progression = makeProgression(firstNumber, step, randomLength);
  const randomIndex = randomNumber(0, progression.length - 1);

  const rightAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};
const startGame = () => play(description, generateRound);
export default startGame;
