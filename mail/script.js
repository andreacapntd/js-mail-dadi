// far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide. Dare all'utente un messaggio opportuno.

var listaMail = ["giacomo@hotmail.it", "giorgio@gmail.com", "gino@libero.it"];
var mailUtente = prompt("Inserisci la tua mail");
var mailTrovata = false;

for (var i = 0; i < listaMail.length; i++) {
  if (mailUtente == listaMail[i]) {
    mailTrovata = true;
  }
}

if (mailTrovata == true) {
  console.log("Mail verificata");
} else if (mailTrovata == false) {
  console.log("Mail non valida");
}
