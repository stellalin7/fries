var hands = ['rock','paper','scissors'];

function getHand() {
	var i = parseInt(Math.random()*10) % 3;
	// generates random number between 0 and 2
	return hands[i];
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

var player3 = {
	name: "Player 3",
	hand: null,
	wins: 0,
}

var player4 = {
	name: "Player 4",
	hand: null,
	wins: 0,
}

function playRound(p1,p2){
	p1.hand = getHand();
	p2.hand = getHand();
	console.log(p1.name + " picked " + p1.hand +".");
	console.log(p2.name + " picked " + p2.hand +".");

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
		console.log(winner.name + " wins.");
		winner.wins ++;
	}
	return winner;
} 

function playGame(p1,p2,minWins){
	while (p1.wins < minWins && p2.wins < minWins){
		var lastWinner = playRound(p1,p2);
		console.log(p1.name + " has won "+ p1.wins + " games this round.");
		console.log(p2.name + " has won "+ p2.wins + " games this round.");
	}
	return lastWinner;
}


function playTournament(p1,p2,p3,p4,minWins){
	var winner1 = playGame(p1, p2, minWins);
	var winner2 = playGame(p3, p4, minWins);
	console.log(winner1.name + " will play " + winner2.name + " in the final round:");
	winner1.wins = 0;
	winner2.wins = 0;
	return playGame(winner1, winner2, minWins);

}

let playUntil = 5;
console.log(playTournament(player1, player2, player3, player4, playUntil).name + " is the world champion!");