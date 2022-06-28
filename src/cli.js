import readlineSync from 'readline-sync';

const UserName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log(`Hello, ${UserName}!`);
export default UserName;
