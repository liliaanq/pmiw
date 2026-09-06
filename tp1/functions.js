function reset() {
  s = 0; c = 0; t = 0;
  susejex = 750;
  susejey = 300;
  contador = millis();
  contador2 = millis();
  contador3 = millis();
  tiempoinicio = millis ();
}

function precargas (s, f, psj) {
for (let i = s; i <= f; i++){
psj.push( loadImage( "/assets/walk/w_" +i+ ".png") );
}
}
function precargat (s, f, psj) {
for (let i = s; i <=f; i++){
psj.push( loadImage( "/assets/trampilla/t_" +i+ ".png") );
}
}
function precargac (s, f, psj) {
  for (let i = s; i<=f; i++){
 psj.push (loadImage( "/assets/death/d_"+i+".png"));
  }
}
