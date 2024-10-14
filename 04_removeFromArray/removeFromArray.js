const removeFromArray = function() {
   
   let array = arguments[0];
   let numbersToDelete = [];


   for (let i = 1; i < arguments.length; i++) {
      numbersToDelete.push(arguments[i]);
   }
   console.log(`ToDelete: ${numbersToDelete}, fromArray: ${array}`)

   
   let newArray = [];
   
   for (let i=0; i<array.length; i++){
      if (numbersToDelete.includes(array[i])){
         continue
      }
      newArray.push(array[i])
   }
   console.log(`ToDelete: ${numbersToDelete}, finalArray: ${newArray}`);
   return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
