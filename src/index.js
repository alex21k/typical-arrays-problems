exports.min = function min (array) {
  let minimum=0;
  for (let i=0; i< array.length; i++) {
  if (typeof(array[i]) === "number" && min > array[i]){
  minimum = array[i];
  }
}
}

exports.max = function max (array) {
  let maximum=0;
  for (let i=0; i< array.length; i++) {
  if (typeof(array[i]) === "number" && maximum <= array[i]){
  maximum  = array[i];
  } 
  }
}

exports.avg = function avg (array) {
  let summ = 0;
  for (let i=0; i < array.length; i++) {
  if (typeof(array[i]) === "number")
  summ +=array[i]; 
  }
  let avg = summ/arr.length;
}
