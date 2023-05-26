let grid = null;
// let speedX = 0.001, speedY = 0.2;
// let offX = 0.0, offY = 0.00;
const target = {
  x: 0,
  y: 0,
  wayX: 0,
  wayY: 0,
  d: 24,
}
function mouseDragged() {
  target.wayX = pmouseX < mouseX ? 1 : -1;
  target.wayY = pmouseY < mouseY ? 1 : -1;
  target.x = mouseX;
  target.y = mouseY;

  if(grid) {
    grid.trace(target);
  }
}

function setup() {
  const canv = createCanvas(project.width, project.height);
  canv.parent(project.parentId);
  frameRate(project.fps);

  grid = new Material_grid(24, 20, 136,48, 24);
}

function draw() {
  background(project.bg);

  grid.draw();

  noFill();
  stroke(project.lineColor);
  circle(mouseX, mouseY, target.d);
}