function returnRandom() {
	var numeroRandom = Math.floor(Math.random() * 5) + 1;
	return numeroRandom;
}


document.write(returnRandom());
alert(returnRandom());
var varRandom = returnRandom();