/*
programma che genera un numero random e permette all'utente di indovinarlo,
fornendogli 2 tentativi
*/

//assumiamo che l'utente non risponda correttamente
var rispostaEsatta = false;

//generiamo un numero da 1 a 5
var numeroRandom = Math.floor(Math.random() *5) +1;

//primo tentativo
var tentativo = prompt("Qual'è il numero?");

/*verifichiamo se l'utente:
1.ha risposto correttamente
2.ha inserito un numero minore
3.ha inserito un numero maggiore
*/
if (parseInt(tentativo) === numeroRandom) {
	rispostaEsatta = true;
} else if (parseInt(tentativo) < numeroRandom){
	var numMin = prompt("Prova ancora. Il numero è maggiore di " +tentativo);
	if(parseInt(numMin) === numeroRandom) {
		rispostaEsatta = true;
	}
} else if (parseInt(tentativo)>numeroRandom) {
	var numMag = prompt("Prova ancora.Il numero è minore di " + tentativo);
	if (parseInt(numMag) === numeroRandom) {
		rispostaEsatta = true;
	}
}

//verifichiamo se la risposta è corretta e facciamo apparire un messaggio
if(rispostaEsatta){
	document.write("Bravo! Era il numero " + tentativo);
} else {
	document.write("Peccato! Era il numero " + numeroRandom);
}
