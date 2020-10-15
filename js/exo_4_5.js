
/**
 * Exercice 4.5
 * 
 * @author Charlène Bonnardeaux
 * @constant readlineSync
 * 
 * @function calcDistance 
 * @description It's a function which takes the coordinates of two different points A and B in a 2D space and return the distance between those.
 * @param {array} - Point A with 2 coordonates in x and y axes
 * @param {array} - Point B with 2 coordonates in x and y axes
 * @returns {number} The distance beetween those two points
 */


// C O N S T A N T E S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const readlineSync = require("readline-sync");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// V A R I A B L E S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let pointA = [-2, 2];
let pointB = [2, -2];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// F O N C T I O N S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
function calcDistance (a,b){
    let distance= Math.sqrt( ((b[0]-a[0])**2) + ((b[1]-a[1])**2) );
    return Math.floor(distance*100)/100
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
console.log(`The distance beetween ${pointA} et ${pointB} est de ${calcDistance(pointA,pointB)}`);

