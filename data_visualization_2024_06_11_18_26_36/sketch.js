let data = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250];

function setup() {
  createCanvas(800, 600);
  noLoop(); // Draw the chart once
}

function draw() {
  background(255);

  let barWidth = width / data.length;
  
  for (let i = 0; i < data.length; i++) {
    let barHeight = map(data[i], 0, max(data), 0, height);
    let x = i * barWidth;
    let y = height - barHeight;

    // Draw the bar
    fill(0, 100, 200);
    rect(x, y, barWidth, barHeight);

    // Draw the value
    fill(0);
    textAlign(CENTER, BOTTOM);
    text(data[i], x + barWidth / 2, y - 5);
  }

  // Draw the x-axis
  stroke(0);
  line(0, height, width, height);
}

function mousePressed() {
  // Randomize data and redraw the chart
  for (let i = 0; i < data.length; i++) {
    data[i] = random(0, 300);
  }
  redraw();
}
