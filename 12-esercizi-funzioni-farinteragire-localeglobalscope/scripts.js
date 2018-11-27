/*local scope*/
function game () {
	var player = "Marco"; /*condizione:devo sempre dichiarare la variabile con var*/
	alert(player);
}
/*global scope*/
var player = "Daniele"; /*variabile dichiarata nella riga 3 come "var player" se avessimo lasciato solo "player" allora il giochetto non funzionerebbe fra il local e global scope*/

/*OCCHIO:importante ricordare che "local scope" e "global scope" non interagiscono e possono interagire 
soltanto con una condizione: bisogna sempre dichiarare la variabile (vedi riga 3 e 7)*/

game();
alert(player);
game();