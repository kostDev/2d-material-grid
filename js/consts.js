const project = {
  parentId: 'app',
  width: 820,
  height: 560,
  cols: 2,
  rows: 2,
  step: 42, // px
  fps: 30,
  bg: '#5c4065',
  lineColor: '#d0cece',
  pointColor: '#000',
}

function* generatorId(uniqueName = 'ID', id = 0) {
  while (true) yield Symbol.for(uniqueName + id++);
}