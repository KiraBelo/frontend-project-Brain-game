import readlineSync from 'readline-sync';

  const roundCounts = 3;
  
  const gameEngine = (gameRule, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log(gameRule);

  for (let i = 0; i < roundCounts; i += 1) {
    const [question, rightAnswer] = gameRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${UserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${UserName}!`);
};
export default gameEngine;
