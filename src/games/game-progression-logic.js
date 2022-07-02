import randomNumber from '../randomNumber.js';
import gameEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';

const gameRound = () => {
  const randomIndex = randomNumber(0, 10);
  const step = randomNumber(2, 13);
  let num1 = randomNumber(1, 15);
  const question = [];
  for (let i = 0; i <= 10; i += 1) {
    question.push(num1);
    num1 += step;
  }
  const rightAnswer = String(question[randomIndex]);
  question[randomIndex] = '..';
  return [question, rightAnswer];
};
const brainProgression = () => gameEngine(gameRule, gameRound);
export default brainProgression;
