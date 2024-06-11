let img;

function preload() {
  // Load the image
  img = loadImage('ice weather.avif');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);

  // Apply the posterize filter
  posterize(img, 5); // Adjust the second parameter to change the number of levels
}

function draw() {
  // Display the result
  image(img, 0, 0);
}

function posterize(img, levels) {
  img.loadPixels();

  // Calculate the interval between colors
  let interval = 255 / (levels - 1);

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;

      // Get the current color
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      // Calculate the new color based on the interval
      r = round(r / interval) * interval;
      g = round(g / interval) * interval;
      b = round(b / interval) * interval;

      // Set the new color
      img.pixels[index] = r;
      img.pixels[index + 1] = g;
      img.pixels[index + 2] = b;
    }
  }

  img.updatePixels();
}
