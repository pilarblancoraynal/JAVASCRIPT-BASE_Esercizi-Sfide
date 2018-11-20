function returnRandom(numMax) {
	var numeroRandom = Math.floor(Math.random() * numMax) + 1;
	return numeroRandom;
}



alert(returnRandom(10));
alert(returnRandom(100));
alert(returnRandom(1000));
alert(returnRandom(10000));
alert(returnRandom(100000));
alert(returnRandom(1000000));

