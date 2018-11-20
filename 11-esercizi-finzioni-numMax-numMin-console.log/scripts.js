function returnRandom(numMin, numMax) {
	var numeroRandom = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
	return numeroRandom;
}



console.log(returnRandom(10, 20));
console.log(returnRandom(100, 200));
console.log(returnRandom(1000, 2000));
console.log(returnRandom(10000, 20000));


