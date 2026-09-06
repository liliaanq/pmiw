let sus = [];
let victima;
let cadaver = [];
let trampilla = [];
let s, c, t;
let fondo;
let estado;
let contador;
let contador2;
let contador3;
let velocidad = 75;
let fondoejex;
let susejex;
let susejey;
let tiempoinicio= 0;

function preload() {
  precargas(1, 12, sus);
  precargat(1, 7, trampilla); // t_1 a t_8 (0 a 7)
  fondo = loadImage("/assets/fondo.png");
  victima = loadImage("/assets/paradito.png");
  precargac(1, 33, cadaver);   
}

function setup() {
  createCanvas(800, 600);
  background(0);
  reset();
}

function draw() {
  let tiempotranscurrido = millis() - tiempoinicio;
   fondoejex = -1000 + (tiempotranscurrido * 0.20);
  if (fondoejex > 0) fondoejex = 0;
  image(fondo, fondoejex, 0);

  let cadaverejex = 300 + fondoejex;
  let cadaverejey = 300;  
  if (tiempotranscurrido < 4500) {
    image(victima, cadaverejex, cadaverejey);
  } else {
    image(cadaver[c], cadaverejex, cadaverejey);
    if (millis() > contador2 + velocidad) {
      if (c < 32) c = c + 1;
      contador2 = millis();
    }
  }
  if (susejex > 20) {
    susejex = susejex - 2;
  } else {
    susejex = 20;
    if (susejey > 40) {
      susejey = susejey - 2;
    } else {
      susejey = 40;
    }
  }
  if (millis() > contador + velocidad) {
    s =(s + 1)%12;
    contador = millis();
  }
  if (susejey > 40) {
    image(sus[s], susejex, susejey);
  } else {
    image(trampilla[t], 20, 40);
    if (millis() > contador3 + velocidad) {
      if (t < 6) t = t + 1;
      contador3 = millis();
    }
  }
  if (tiempotranscurrido>= 9000) {
    reset(); 
  }
  }
