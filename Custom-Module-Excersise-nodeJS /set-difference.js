function setDifference(array1 ,array2){
  var arrayHolder = [];
  var difference = [];

   for (var i = 0; i < array1.length; i++) {
       arrayHolder[array1[i]] = true;
   }

   for (var i = 0; i < array2.length; i++) {
       if (arrayHolder[array2[i]]) {
           delete arrayHolder[array2[i]];
       } else {
           arrayHolder[array2[i]] = true;
       }
   }

   for (var k in arrayHolder) {
       difference.push(k);
   }

   return "Difference ->  " + difference;
};


module.exports = setDifference;
