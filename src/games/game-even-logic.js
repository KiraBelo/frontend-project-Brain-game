import randomNumber from '../randomNumber.js';
import gameEngine from '../index.js';

const gameRule = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const isEven = (number) => number % 2 === 0;

const gameRound = () => {
  const number = randomNumber(1, 100);
  const question = `${number}`;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startGame = () => gameEngine(gameRule, gameRound);

export default startGame;
