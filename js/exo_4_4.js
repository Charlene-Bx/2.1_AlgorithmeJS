
/**
 * Exercice 4.4
 * @function array - It's a function that tell you the average of your arrany and the minima and the maxima of it.
 * 
 * @param average - It's a function that calculate the average of an array.
 * @return {number} - the avaerage of the array
 * 
 * @param mini - It's a function that shearch the most smaller number of an array.
 * @return {number} - the most smaller number of the array
 * 
 * @param maxi - It's a function that shearch the most bigger number of an array.
 * @return {number} - the most bigger number of the array
 */


// C O N S T A N T E S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const readlineSync = require("readline-sync");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// V A R I A B L E S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let i = 0;
let randarr = [];
let howmany = parseInt(readlineSync.question("How many wanting random number in your array? "));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// F O N C T I O N S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
function rand10() {
    return Math.floor(Math.random() * 10)+1;
}

function multiRand(n) {

    for (let x=0;x<=(n-1);x++){
        randarr.push(rand10());
    }

    return randarr;
}

function average(arr){
    for (let elements of arr) {
        i = i + elements;
    }
    return i/arr.length
}

function mini(arr){
    return Math.min(...arr);
}

function maxi(arr){
    return Math.max(...arr);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


console.log(`You have ${howmany} randoms numbers in your array that are: ${multiRand(howmany)}`);
console.log(`The average of your array (${randarr}) is ${average(randarr)}!`);
console.log(`The minimun value of it is: ${mini(randarr)}.`);
console.log(`The maximun value of it is: ${maxi(randarr)}.`);

