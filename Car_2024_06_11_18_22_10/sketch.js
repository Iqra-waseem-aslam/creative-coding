let carX = 50;
let carY = 250;
let carWidth = 300;
let carHeight = 100;
let wheelSize = 40;
let windshieldHeight = 40;
let roofHeight = 30;
let spoilerHeight = 30;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  

  fill(255, 165, 0); 
  beginShape();
  vertex(carX, carY);
  vertex(carX + 20, carY - roofHeight);
  vertex(carX + carWidth - 20, carY - roofHeight);
  vertex(carX + carWidth, carY);
  vertex(carX + carWidth, carY + carHeight - spoilerHeight);
  vertex(carX, carY + carHeight - spoilerHeight);
  endShape(CLOSE);
  

  fill(173, 216, 230); 
  beginShape();
  vertex(carX + 20, carY - roofHeight);
  vertex(carX + 40, carY - 20 - windshieldHeight);
  vertex(carX + carWidth - 40, carY - 20 - windshieldHeight);
  vertex(carX + carWidth - 20, carY - roofHeight);
  endShape(CLOSE);

  fill(255);
  rect(carX + 50, carY - 60, carWidth - 90, windshieldHeight - 10);
  

  fill(255, 165, 0); // 
  rect(carX + 10, carY + carHeight - spoilerHeight, carWidth - 20, spoilerHeight);
  
  
  fill(0);
  ellipse(carX + 50, carY + carHeight - 10, wheelSize, wheelSize);
  ellipse(carX + carWidth - 50, carY + carHeight - 10, wheelSize, wheelSize);
  
  
  carX += 1;
  
  if (carX > width) {
    carX = -carWidth;
  }
}
