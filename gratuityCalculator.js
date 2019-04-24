function gratuity (billAmt) {
	return billAmt * tip;
}

function totalWithGrat(billAmt){
	return billAmt += gratuity(billAmt);
}

let billAmount = Math.floor(Math.random()*100);
// generates random number between 0 and 99
console.log("Bill Amount: $" + billAmount);

var tip = (prompt("What % would you like to tip?"))/100;
console.log("You chose to tip "+ tip*100 + "%");

console.log("Your total including gratuity is $" + totalWithGrat(billAmount).toFixed(2));