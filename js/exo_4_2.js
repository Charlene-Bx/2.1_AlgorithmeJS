/**
 * Exercice 4.4
 *  * Exercice 4.5
 * 
 * @author Charlène Bonnardeaux
 * @constant readlineSync
 * 
 * @function rand10 
 * @description It's a function which generate a random number beetween 1 and 10
 * @return {number} A random number beetween 1 and 10
 */


// C O N S T A N T E S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const readlineSync = require("readline-sync");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// L O O P - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
if(readlineSync.keyInYN("* * * R A N D 1 0 * * *")){
} else{
    readlineSync.question("EXIT: Press Control Z: "); 
    readlineSync.question("HELP: Type jsdoc Rand10.js: ");
}

console.log("Your random number beetween 1 and 10 is: "+rand10());

let radio=readlineSync.keyInYN("You don't appreciate your number and you want an other one? ");
while(radio===true){
    console.log("Your new random number is: "+rand10());
    radio=readlineSync.keyInYN("Do you want an other one again? ");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// F O N C T I O N S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
function rand10() {
    return Math.floor(Math.random() * 10)+1;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 





