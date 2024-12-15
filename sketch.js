

// Global variables
let x, y, d, t;
let velX = 1;
var canvasWH = 500;
let posx = 0;
let posy = canvasWH / 2;
let velocidad;
let parada = -0.2; // The more negative the stop value,
// the closer the circle stops to the left margin

function setup() {
  createCanvas(canvasWH, canvasWH);
  x = width / 2;
  y = height / 2;
  diametro = 150;
  t = diametro / 2;
  noStroke();
}

function draw() {
  background(0, 10);

  x += velX;

  if (x > width + t) {
    x = 0 - t;
  }

  setVel('parar');
  circle(x, y, diametro);

  function setVel(_p1) {
    if (_p1 == 'rapido') { // Press R key
      velX = 10;
    }
    if (_p1 == 'lento') { // Press L key
      velX = 1;
    }
    if (_p1 == 'parar') { // Press P key
      velX = 0;
    }

    if (posx < width / 5) {
      velocidad = 3;
    } else if (posx < width / 2) {
      velocidad = 5;
    } // Depending on the position, assign a speed

    if (velocidad > 0) {
      velocidad = velocidad + parada;
    } // If the speed is greater than zero, apply the stop value
    // which acts as a brake
    posx = posx + velocidad; // Update the x position with the speed

    // Circle
    noStroke();
    fill(255);
    circle(posx, posy, diametro); // Draw the circle
    // Add color without using stroke
  }
}

function setup() {
  createCanvas(600, 800); // Vertical
}

function draw() {
  background('rgba(196, 164, 132, 0.05)');
  
  fill(255, 255, 255);  // White fill
  stroke(0, 0, 0);  // Black stroke
  strokeWeight(5);
  rect(20, 140, 30, 140);  // Rectangle (window)
  line(35, 140, 35, 280);  // Bar 1
  line(20, 170, 50, 170);  // Bar 2
  line(20, 210, 50, 210);  // Bar 3
  line(20, 250, 50, 250);  // Bar 4
  
  fill(196, 164, 132);  // Brown fill
  rect(450, 120, 120, 120);  // Rectangle (frame)
  rect(460, 130, 100, 100);  // Rectangle (frame)
  
  fill(196, 164, 132);  // Brown fill
  stroke(0, 0, 0);  // Black outline
  strokeWeight(3); // Stroke thickness
  rect(80, 120, 150, 200);  // Rectangle (cabinet)
  rect(95, 130, 120, 70);  // Rectangle (cabinet)
  
  fill(255, 255, 255);  // White fill
  stroke(0, 0, 0);  // Black outline
  strokeWeight(1);   // Outline thickness
  arc(160, 330, 70, 70, PI, radians(360));  // Arc
  ellipse(180, 265, 70, 70);  // Globe
  rect(135, 265, 90, 10);  // Globe rectangle

  fill(17, 103, 177);  // Blue fill
  rect(50, 330, 280, 200);   // Table
  
  fill('rgba(196, 164, 132, 0.80)');  // Brown with transparency
  beginShape();
  vertex(200, 230);
  vertex(250, 240);
  vertex(270, 260);
  vertex(220, 260);
  endShape(CLOSE);  // Right hand
  
  fill('rgba(17, 103, 177, 0.7)');  // Blue with transparency
  triangle(250, 240, 320, 240, 320, 300);  // Right arm
  
  fill('rgba(17, 103, 177, 0.7)');  // Blue with transparency
  triangle(350, 240, 350, 500, 480, 400);  // Back
  
  fill('rgba(196, 164, 132, 0.7)');  // Brown with transparency
  noStroke();  // No outline
  triangle(295, 220, 320, 190, 320, 220);  // Nose
  stroke(0, 0, 0);  // Black outline
  strokeWeight(0.5);  // Outline thickness
  ellipse(340, 210, 60, 60);  // Head
  noFill();  // No fill
  ellipse(320, 205, 7, 7);  // Eye
  line(320, 230, 330, 230);  // Mouth
  
  beginShape();
  fill('rgba(17, 103, 177, 0.7)');  // Blue with transparency
  vertex(320, 300);
  vertex(350, 300);
  vertex(290, 350);
  vertex(270, 350);
  endShape(CLOSE);  // Left arm

  beginShape();
  fill('rgba(196, 164, 132, 0.7)');
  vertex(285, 335);
  vertex(290, 350);
  vertex(270, 370);
  vertex(270, 350);
  endShape(CLOSE);  // Left hand
  
  beginShape();
  fill(255, 255, 255);
  vertex(320, 300);
  vertex(320, 240);
  vertex(350, 240);
  vertex(350, 300);
  endShape(CLOSE);  // Body
  
  beginShape();
  fill(196, 164, 132);
  vertex(320, 190);
  vertex(340, 210);
  vertex(340, 250);
  vertex(370, 250);
  vertex(370, 200);
  vertex(365, 190);
  vertex(350, 180);
  vertex(330, 178);
  endShape(CLOSE);  // Hair

  fill(196, 164, 132);  // Brown fill
  rect(350, 400, 150, 130);  // Chair
  rect(480, 300, 20, 100);  // Chair
}
