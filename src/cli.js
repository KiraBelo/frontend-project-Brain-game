import readlineSync from 'readline-sync';
const greetingUserName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log('Hello, ' + greetingUserName + '!');
export default greetingUserName; 
