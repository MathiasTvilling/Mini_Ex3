var img;
var img2;
var r=0;
var h=0;

function preload (){
img=loadImage ('assets/zonda.jpg');
img2=loadImage ('assets/earth.jpg');
}


function setup () {
createCanvas (windowWidth, windowHeight);
background (10);
frameRate (70);
}

function draw(){
  r=r+3;
  h=h-4;
noStroke ();
fill (255, 255, 0);
rect (0, 0, width, height);

//Rotating car and earth
  push();
  translate(width / 2, height / 2);
  rotate (radians (r));
  image (img, -90, -180, 170, 50);
  rotate(radians(h));
  image (img2, -125, -125, 250, 250);
  pop();

}
