
/**
 * Exercice 4.6
 * @function factorial
 * @description It's a recursive function that returns the factorial of a number
 * 
 * @param {number} - The number to calculate in fractional number
 * @return {number} The fractional number
 */


// C O N S T A N T E S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const readlineSync = require("readline-sync");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// V A R I A B L E S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let multi=1;
let test=1;
let monChiffre=4;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// F O N C T I O N S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
function factorial(a) {
for (let x=1;x<=a;x++){
    multi=multi*x;
}
return multi
}

function fact(a) 
{
  if (a === 0)
  {
    return 1;
  }
  return fact(a-1)* a ;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
console.log(`Your number is: ${monChiffre} And the fractional of this is: ${factorial(monChiffre)}! But with a boucle For`);
console.log(`Your number is: ${monChiffre} And the fractional of this is: ${fact(monChiffre)}! In recursive function!`);

