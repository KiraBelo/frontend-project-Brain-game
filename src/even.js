import readlineSync from 'readline-sync';
import randomNumber from './randomNumber.js';

const even = () => {
  const UserName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello,${UserName}!`);
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(1, 100);
    const userAnswer = readlineSync.question(`Question: ${number}\nAnswer: `);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === rightAnswer) { console.log('Correct!'); } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again ${UserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${UserName}!`);
};
export default even();
