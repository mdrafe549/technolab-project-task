const getUserChoice = userInput => {
userInput =Math.floor(Math.random() * 4);
switch (userInput) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  case 3:
    return 'bomb';}};
console.log('User Choice is: '+ getUserChoice());

let getComputerChoice = randomNumber => {
  randomNumber=Math.floor(Math.random() * 3);
switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}};
console.log('User Choice is: '+ getComputerChoice());

function determineWinner(userChoice,computerChoice) {
	if (userChoice === computerChoice) {
  	return 'The game is a tie!';};
 	if (userChoice === 'rock') {
  	if (computerChoice === 'paper') {
    	return 'The computer won!';
  	} else {
    return 'You won!';
  }
};
  if (userChoice === 'paper') {
  	if (computerChoice === 'scissors') {
   	 return 'The computer won!';
  } else {
    return 'You won!';
  }
};
  	if (userChoice === 'scissors') {
  	if (computerChoice === 'rock') {
    	return 'The computer won!';
  	} else {
    return 'You won!';
  }
};
    	if (userChoice === 'bomb') {
    return 'You won!';
  }
};
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = () => {
   const userChoice = getUserChoice();
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();