var woolOwners = [
  {
	  "master": 1
  },
  {
  	"dame": 1
  },
  {
	"little boy": 1,
	"location": "down the lane"
  }
];


var bags = woolOwners.length;


function baabaaBlackSheep() {
	console.log("BaaBaa BlackSheep have you any wool?");
	if (bags > 0) {
		console.log("yes sir, yes sir " + bags + " bags full");
  	}
}

function oneForMy() {
	for (var i = 0; i < bags - 1; i++) {
		var people = Object.keys(woolOwners[i]);
		var person = people.toString();
		console.log("one for my " + person);
	}

	var boy = Object.keys(woolOwners[i]);
	var littleBoy = boy[0];
	var whereHeLives = woolOwners[i].location;
	console.log("one for the " + littleBoy + " that lives " + whereHeLives);
}

baabaaBlackSheep();
oneForMy();

