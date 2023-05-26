class Material_grid {
  #data;
  constructor(
    cols = project.cols,
    rows = project.rows,
    xStart = 0,
    yStart = 0,
    step = project.step
  ) {
    this.cols = cols;
    this.rows = rows;
    this.#data = [];
    this._trashDist = null;

    for(let y = 0, yPos = yStart; y < rows; y++, yPos += step) {
      this.#data.push([]);
      for(let x = 0, xPos = xStart; x < cols; x++, xPos += step) {
        this.#data[y].push(
          new Material_point(xPos, yPos, x, y, this.#data)
        )
      }
    }
  }

  trace(target) {
    this._trashDist = null;
    this.#data.forEach(row => {
      row.forEach(p => {
        this._trashDist = dist(p.pos.x, p.pos.y, target.x, target.y);
        if(this._trashDist < target.d) {
          p.pos.x += target.wayX;
          p.pos.y += target.wayY;
        }
      });
    });
  }

  drawHorizontalLines() {
    for(let y = 0; y < this.rows; y++) {
      beginShape();
      noFill();
      stroke(project.lineColor);
      strokeWeight(2);
      for(let x = 0; x < this.cols; x++) {
        if(x === 0 && x === this.cols-1) {
          curveVertex(this.#data[y][x].pos.x, this.#data[y][x].pos.y);
        }
        curveVertex(this.#data[y][x].pos.x, this.#data[y][x].pos.y);
      }
      endShape();
    }
  }

  drawVerticalLines() {
    for(let x = 0; x < this.cols; x++) {
      beginShape();
      noFill();
      stroke(project.lineColor);
      strokeWeight(2);
      for(let y = 0; y < this.rows; y++) {
        if(y === 0 && y === this.rows-1) {
          curveVertex(this.#data[y][x].pos.x, this.#data[y][x].pos.y);
        }
        curveVertex(this.#data[y][x].pos.x, this.#data[y][x].pos.y);
      }
      endShape();
    }
  }

  draw() {
    // this.drawHorizontalLines();
    this.drawVerticalLines();
    // for(let y = 0; y < this.rows; y++) {
    //   for(let x = 0; x < this.cols; x++) {
    //     this.#data[y][x].draw();
    //   }
    // }
  }
}