var hands = ['rock','paper','scissors'];

function getHand() {
	var i = parseInt(Math.random()*10) % 3;
	// generates random number between 0 and 2
	return handi = hands[i];
}

var player1 = {
	name: "Player 1",
	hand: null,
	wins: 0,
}

var player2 = {
	name: "Player 2",
	hand: null,
	wins: 0,
}

function playRound(p1,p2){
	p1.hand = getHand();
	p2.hand = getHand();
	console.log("Player 1 picked " + p1.hand +".");
	console.log("Player 2 picked " + p2.hand +".");

	if (p1.hand == 'rock' && p2.hand == 'rock'){
		console.log("Tie");
		var winner = null;
	}
	if (p1.hand == 'paper' && p2.hand == 'paper'){
		console.log("Tie");
		var winner = null;
	}
	if (p1.hand == 'scissors' && p2.hand == 'scissors'){
		console.log("Tie");
		var winner = null;
	}

	if (p1.hand == 'rock' && p2.hand == 'paper'){
		var winner = p2;
		console.log("Paper beats rock.");
	}
	if (p1.hand == 'paper' && p2.hand == 'rock'){
		var winner = p1;
		console.log("Paper beats rock.");
	}

	if (p1.hand == 'scissors' && p2.hand == 'rock'){
		var winner = p2;
		console.log("Rock beats scissors.");
	}
	if (p1.hand == 'rock' && p2.hand == 'scissors'){
		var winner = p1;
		console.log("Rock beats scissors.");
	}

	if (p1.hand == 'paper' && p2.hand == 'scissors'){
		var winner = p2;
		console.log("Scissors beats paper.");
		
	}
	if (p1.hand == 'scissors' && p2.hand == 'paper'){
		var winner = p1;
		console.log("Scissors beats paper.");

	}

	if (winner){
		console.log(winner.name + " wins this round.");
		winner.wins ++;
	}
	return winner;
} 

function playGame(p1,p2,minWins){
	while (p1.wins < minWins && p2.wins < minWins){
		var lastWinner = playRound(p1,p2);
		console.log("Player 1 has won "+ p1.wins + " games this round.");
		console.log("Player 2 has won "+ p2.wins + " games this round.");
	}
	return lastWinner;
}

let playUntil = 5; 
console.log(playGame(player1, player2, playUntil).name + " has won the game with " + playUntil + " wins.");


