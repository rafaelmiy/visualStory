function setup() {
  var canvas = createCanvas(1240, 480);
  canvas.parent('cover');
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  noFill();
  stroke(255);
  rect(mouseX, mouseY, 80, 80);
  // noFill();
  // rect(mouseX-10, mouseY-10, 80, 80);
}