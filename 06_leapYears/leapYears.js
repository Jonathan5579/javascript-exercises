const leapYears = function(year) {

   /**Multiple if solution*/
   if (year%4 == 0){
      //possible leap year
      if (year%100 == 0){
         //not leap year unles...
         if (year%400==0){
            return true
         }
         return false
      }
      return true
   }
   return false

   /*
   //*One if solution
   if (year%4==0 && (year%100!=0 || year%400==0)){
      return true
   }
   return false
   */
};

// Do not edit below this line
module.exports = leapYears;
