// Per l'esercizio dei dadi creare un mini gioco in cui si lanciano due dadi, uno per il computer e uno per il giocatore e si determina chi ha vinto.

var dadoUser = Math.floor(Math.random() * (6 - 1 +1)) +1;
var dadoCpu = Math.floor(Math.random() * (6 - 1 +1)) +1;

console.log(dadoUser);
console.log(dadoCpu);
if (dadoUser > dadoCpu) {
  console.log("Ha vinto l'utente");
} else if (dadoUser < dadoCpu){
  console.log("Ha vinto il computer");
} else {
  console.log("Avete pareggiato");
}
