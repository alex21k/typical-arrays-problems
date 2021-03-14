exports.min = function min(array) {
  if (Array.isArray(array) === true){
  let minimum=0;
  let k = array.length;
  for (let i=0; i< k; i++) {
  if (typeof(array[i]) === "number" && minimum >= array[i]){
  minimum = array[i];
  } 

}
return minimum;
} else return 0;
}

exports.max = function max(array) {
  if (Array.isArray(array) === true){
  let maximum=0;
  for (let i=0; i< array.length; i++) {
  if (typeof(array[i]) === "number" && maximum <= array[i]){
  maximum  = array[i];
  }  
  }
  return maximum;
}else return 0;
}

exports.avg = function avg(array) {
  if (Array.isArray(array) === true && array.length !=0){
  let summ = 0;
  
  for (let i=0; i < array.length; i++) {
  if (typeof(array[i]) === "number") {
  summ +=array[i]; 
  } else continue;
  
  }
  let avg = summ/array.length;
return avg;
} else return 0;
} 
