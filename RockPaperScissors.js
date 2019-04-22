var valid = false;
while (!valid){
	var player = prompt("Please enter 'r' for rock, 'p' for paper, or 's' for scissors:")
	valid = true;
	switch (player){
		case 'r': 
			console.log("You picked rock.");
			break;
		case 'p':
			console.log("You picked paper.");
			break;
		case 's':
			console.log("You picked scissors.");
			break;
		default:
			valid = false;
	}
}

var x = Math.floor(Math.random()*99) % 3;
// generates random number between 0 and 2
switch (x){
	case 0: 
		var computer = 'rock';
		break;
	case 1:
		var computer = 'paper';
		break;
	case 2:
		var computer = 'scissors';
		break;
}

console.log("Computer picked " + computer +".");

if (player == 'r' && computer == 'rock'){
	console.log("Tie");
}
if (player == 'p' && computer == 'paper'){
	console.log("Tie");
}
if (player == 's' && computer == 'scissors'){
	console.log("Tie");
}

if (player == 'r' && computer == 'paper'){
	console.log("Computer wins.");
	console.log("Paper beats rock.");
}
if (player == 'p' && computer == 'rock'){
	console.log("You win.");
	console.log("Paper beats rock.");
}

if (player == 's' && computer == 'rock'){
	console.log("Computer wins");
	console.log("Rock beats scissors.");
}
if (player == 'r' && computer == 'scissors'){
	console.log("You win.");
	console.log("Rock beats scissors.");
}

if (player == 'p' && computer == 'scissors'){
	console.log("Computer wins.");
	console.log("Scissors beats paper.");
}
if (player == 's' && computer == 'paper'){
	console.log("You win");
	console.log("Scissors beats paper.");
}
