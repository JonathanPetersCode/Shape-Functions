function calcRecArea(width,height){
  if width === isNan || height === isNaN
  throw a new Error("One or more entries was not a number, try again..")
return width*height;
}

function calcPrismArea(width,height,length){
return length*width*height;
}
function calcCircleArea(radius){
return Math.pow(radius,2)*Math.PI;
}
function calcSphereVol(radius){
return Math.pow(radius,3)*Math.PI*4/3;
}
