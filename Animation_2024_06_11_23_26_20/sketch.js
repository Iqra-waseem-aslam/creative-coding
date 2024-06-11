var numFrames = 6;

var frame = 0

var images = new Array(numFrames);



function preload() {

    images[0] = loadImage("gif 1 png.gif");

    images[1] = loadImage("gif 1 png.gif");

    images[2] = loadImage("gif 1 png.gif");

    images[3] = loadImage("gif 1 png.gif");

    images[4] = loadImage("gif 1 png.gif");

    images[5] = loadImage("gif 1 png.gif");

}

function setup() {

    createCanvas(600, 400);

    frameRate(15);

    background(255);

}



function draw() {

background(255);

frame++;

if (frame == numFrames) frame = 0;

image(images[frame], mouseX - 75, mouseY - 100);

}

