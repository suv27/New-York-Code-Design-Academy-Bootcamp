function setIntersection(array1, array2){

 var result = array1.filter(value => -1 !== array2.indexOf(value));

  return "Similarities ->  " + result;
};


module.exports = setIntersection;
