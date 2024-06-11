let circles = [];

function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  background(0, 20);  

  
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    
    
    circle.size += 2;
    circle.alpha -= 2;
  
    fill(circle.color[0], circle.color[1], circle.color[2], circle.alpha);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);

    if (circle.alpha <= 0) {
      circles.splice(i, 1);
    }
  }
}
function mousePressed() {
  //
  let newCircle = {
    x: mouseX,
    y: mouseY,
    size: 10,
    alpha: 255,
    color: [random(255), random(255), random(255)]
  };
  circles.push(newCircle);
}
