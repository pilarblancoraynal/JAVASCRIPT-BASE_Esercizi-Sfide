var numeroRandom = Math.floor(Math.random() *5) +1;
var tentativo = prompt("Qual'è il numero?");

if ( parseInt(tentativo) === numeroRandom) {
	document.write("Bravo! Era il numero " + tentativo);
} else {
	document.write("Peccato! Era il numero " + numeroRandom);
}