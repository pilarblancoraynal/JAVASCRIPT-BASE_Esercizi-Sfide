var input1 = prompt ("Digita il numero inferiore");
var numeroInf = parseInt(input1);
var input2 = prompt("Digita un numero Superiore");
var numeroSup = parseInt(input2);

var numRandom = Math.floor(Math.random() * (numeroSup - numeroInf +1) + numeroInf);

var messaggio = numRandom + " è un numero da " + numeroInf + " a " + numeroSup;

document.write(messaggio);