//Given an array of numbers. Determine whether the sum of all of the numbers is odd or even. Return it in a string format "odd" or "even"
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
