const getMaterialPointId = generatorId('PointID');
class Material_point {
  #id;
  #parent;
  constructor(x, y, indexX, indexY,  parent = null, color = project.pointColor) {
    this.#id = getMaterialPointId.next().value;
    this.#parent = parent;
    this.pos = createVector(x, y)
    this.index = createVector(indexX, indexY);
    this.color = color;
    this.strokeWeight = 5;
  }

  setParent(parent) {
    this.#parent = parent;
  }

  draw() {
    fill(this.color);
    stroke(this.color);
    strokeWeight(this.strokeWeight);
    point(this.pos);
  }
}