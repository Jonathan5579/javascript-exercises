const sumAll = function(num1, num2) {

   if (arguments.length > 2){
      return "ERROR";
   }
   //Check for non-number parameters
   if (typeof(num1) !== typeof(1) || typeof(num2) !== typeof(1)){
      return "ERROR";
   }
   //Check for negatives
   if (num1 < 0 || num2 < 0){
      return "ERROR";
   }
   if (num1 % 1 != 0 || num2 % 1 !=0){
      return "ERROR";
   }
   let startNumber = num1;
   let finNumber = num2;

   if (num1 > num2){
      startNumber = num2
      finNumber = num1;
   }

   let sum = 0;
   for (let i=startNumber; i <=finNumber; i++){
      sum += i;
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
