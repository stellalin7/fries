function gratuity (billAmount) {
	return billAmount * .2;
}

function totalWithGrat(billAmount){
	return billAmount += gratuity(billAmount);
}

let billAmount = Math.floor(Math.random()*100);
// generates random number between 0 and 99
console.log("Bill Amount: $"+billAmount);

console.log("Your total including gratuity is $"+totalWithGrat(billAmount).toFixed(2));