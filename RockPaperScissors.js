// var valid = false;
// while (!valid){
// 	var player = prompt("Please enter 'r' for rock, 'p' for paper, or 's' for scissors:")
// 	valid = true;
// 	switch (player){
// 		case 'r': 
// 			console.log("You picked rock.");
// 			break;
// 		case 'p':
// 			console.log("You picked paper.");
// 			break;
// 		case 's':
// 			console.log("You picked scissors.");
// 			break;
// 		default:
// 			valid = false;
// 	}
// }


var hands = ['rock','paper','scissors'];

function getHand() {
	var i = parseInt(Math.random()*10) % 3;
	// generates random number between 0 and 2
	return hands[i];
}

function playRock() {
	var computer = getHand();
	switch (computer){
		case 'rock':
			document.getElementById("message").innerHTML = "Computer picked rock.  It's a tie.";
			break;
		case 'paper':
			document.getElementById("message").innerHTML = "Computer picked paper.  You win.";
			break;
		case 'scissors':
			document.getElementById("message").innerHTML = "Computer picked scissors.  You lose.";
			break;

	}
}

function playPaper() {
	var computer = getHand();
	switch (computer){
		case 'rock':
			document.getElementById("message").innerHTML = "Computer picked rock.  You win.";
			break;
		case 'paper':
			document.getElementById("message").innerHTML = "Computer picked paper.  It's a tie.";
			break;
		case 'scissors':
			document.getElementById("message").innerHTML = "Computer picked scissors.  You lose.";
			break;

	}
}

function playScissors() {
	var computer = getHand();
	switch (computer){
		case 'rock':
			document.getElementById("message").innerHTML = "Computer picked rock.  You lose.";
			break;
		case 'paper':
			document.getElementById("message").innerHTML = "Computer picked paper.  You win.";
			break;
		case 'scissors':
			document.getElementById("message").innerHTML = "Computer picked scissors.  It's a tie.";
			break;

	}
}




