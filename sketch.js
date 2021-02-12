/*
This program demonstrates uploading Media Files in JS
using the functions loadImage and image. Due to Asynchronous nature of Javascript, loadImage is called
in preload function before setup is called. Preload is used to load media assets so that they are ready to use in setup and the rest of the program!
*/
let kitten;
let x;
let y;
let w;
let h;

//Media assets are loaded here.
function preload() {
  kitten = loadImage("VanillaHappyCat.jpg");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  let w = width/2;
  let h = height/2;
  let x = mouseX - (w/2);
  let y = mouseY - (h/2);
  image(kitten,x,y,w,h);
}