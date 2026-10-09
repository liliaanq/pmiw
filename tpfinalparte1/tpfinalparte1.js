let boni = [];
let capi = [];
let lechuza = [];
let pity = [];

function preload() {
    boni= loadImage("data/boni" + ".png");
    capi= loadImage("data/capi" + ".png");
    lechuza= loadImage("data/lechuza" + ".png");
    pity= loadImage("data/pity" + ".png");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);
  image(pity, 10, 130, 0, 0);
}
