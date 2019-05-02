let temp = 90;
let precip = 'thunderstorms';
let indoors = false;

console.log("The temperature is " + temp + " degrees.");

if (indoors || (temp>80 && !precip)){
	console.log("Time to swim.");
}