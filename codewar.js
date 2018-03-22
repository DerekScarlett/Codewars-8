//Given an array of numbers. Determine whether the sum of all of the numbers is odd or even. Return it in a string format "odd" or "even"
function oddOrEven(array) {
   if(array.length == 0){
     return 'even'
   }
   var sum = array.reduce(add, 0)
   function add(x, y){
     return x + y
   }
   
   if(sum % 2 == 0){return 'even'}
   else{return 'odd'}
}
