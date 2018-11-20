var nome = prompt("Come ti chiami?");
var età =prompt("Quanti anni hai?");
var linguaggio = prompt("Che linguaggio stai imparando?");
var motivo = prompt("Per quale motivo vorresti imparare questo linguaggio?");
var messaggio = "Ciao, mi chiamo " + nome;
messaggio += ", ho " + età;
messaggio += " e sto imparando " + linguaggio;
messaggio += " " + motivo;

document.write(messaggio);

