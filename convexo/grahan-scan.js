function CCW(p1, p2, p3) { 
  const value = (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
  if (value > 0) return true; 
  return false; 
}

function isConvex(points) {
  const orderedPoints = (points.sort((point1, point2) => point1.x - point2.x));
  const sup = [];
  for (var i = 0; i < orderedPoints.length; ++i) {
    sup.push(orderedPoints[i]);
    if (i >= 2) {
      while (sup.length > 2 && CCW(sup[sup.length - 3], sup[sup.length - 2], sup[sup.length - 1])) {
        sup.splice(sup.length - 2, 1);
      }
    }
  }
  const inf = [];
  const lastIndex = orderedPoints.length - 1;
  for (var i = 0; i < orderedPoints.length; ++i) {
    const index = lastIndex - i;
    inf.push(orderedPoints[index]);
    if (index <= lastIndex - 2) {
      while (inf.length > 2 && CCW(inf[inf.length - 3], inf[inf.length - 2], inf[inf.length - 1])) {
        inf.splice(inf.length - 2, 1);
      }
    }
  }
  inf.splice(0, 1);
  inf.splice(inf.length - 1, 1);

  const convexPoints = sup.concat(inf).filter((value, index, self) => self.indexOf(value) === index);
  console.log('Pontos iniciais:', points);
  console.log('Pontos convexos:', convexPoints);
  console.log(convexPoints.length === points.length ? 'É convexo' : 'Não é convexo');
}

const convex = [
  { x: 0, y: 0 },
  { x: 3, y: 0 },
  { x: 0, y: 3 },
  { x: 3, y: 3 },
];

const notConvex = [
  { x: 0, y: 0 },
  { x: 0, y: 3 },
  { x: 3, y: 0 },
  { x: 1, y: 1 },
];

const notConvex2 = [
  { x: 0, y: 0 },
  { x: 0, y: 3 },
  { x: 3, y: 0 },
  { x: 1, y: 1 },
  { x: 3, y: 3 },
];

isConvex(convex);
isConvex(notConvex);
isConvex(notConvex2);
