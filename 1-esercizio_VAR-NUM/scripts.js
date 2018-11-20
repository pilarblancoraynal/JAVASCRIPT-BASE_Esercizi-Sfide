var domande = 3;
var domandeRim = "[" + domande + " domande rimanenti]";
var nome = prompt("Come ti chiami?"+ domandeRim);
domande -= 1;
var domandeRim = "[" + domande + " domande rimanenti]";
var età = prompt("Quanti anni hai?" + domandeRim);
domande -= 1;
var domandeRim = "[" + domande + " domande rimanenti]";
var linguaggio = prompt("Che linguaggio stai imparando?" + domandeRim);

var messaggio ="Ciao, mi chiamo " + nome;
messaggio += ", ho " + età;
messaggio += " e sto imparando " + linguaggio;

document.write(messaggio)