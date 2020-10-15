//Installe la library "ReadLine-sync"
const readlineSync = require("readline-sync");


// V A R I A B L E S //
var nbr = 0; 
var i = 0;
var x = 5;
var y = 102;
var arr = [1, 2, 3, 4, 5];
let arr1 = [100, 101, 102];
let newarr =[];


// Exercise 4.4 --------------------------------------------------------------------------------------------------------------------------
// Function average return the average of an array 
// @param {array} the array to calculate the average
// @return {number} the average of the array

// Function mini return the minimal element of an array 
// @param {array} the array to take the minimum
// @return {number} the minimum of the array

// Function maxi return the maximal element of an array 
// @param {array} the array to take the maximal
// @return {number} the maximal of the array



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

let arrtest =[1,2,3,4,5];
console.log(`The average of your array (${arrtest}) is ${average(arrtest)}!`);
console.log(`The minimun value of it is: ${mini(arrtest)}.`);
console.log(`The maximun value of it is: ${maxi(arrtest)}.`);


//Exercise 4.3 --------------------------------------------------------------------------------------------------------------------------
// Function multirand generate an array of random number with a lengt choosed by user
// @param {number} the length of the genrate array
// @return {array} the array of randoms numbers

if(readlineSync.keyInYN("* * * E X E R C I C E  4.3 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
if(readlineSync.keyInYN("Do you want to see the documentation for the function multirand? ")){
    console.log("It's a function that generate an array with how many random number you want! Isn't it cool?! Let's go!")
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import {rand10}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let randarr = [];
let howmany = parseInt(readlineSync.question("How many wanting random number in your array? "));

function multiRand(n) {

    for (let x=0;x<=(n-1);x++){
        randarr.push(rand10());
    }

    return randarr;
}

console.log(`You have ${howmany} randoms numbers in your array that are: ${multiRand(howmany)}`);


//Exercise 4.2 -------------------------------------------------------------------------------------------------------------------------
// Function rand1O generate a random number between 1 and 10
// @return {number} a random number

if(readlineSync.keyInYN("* * * E X E R C I C E  4.2 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
if(readlineSync.keyInYN("Do you want to see the documentation for the function rand10? ")){
    console.log("It's a function that generate a random number between 1 and 10. Let's go!")
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function rand10() {
    return Math.floor(Math.random() * 10)+1;
}
console.log("Your random number beetween 1 and 10 is: "+rand10());

let radio=readlineSync.keyInYN("You don't appreciate your number and you want an other one? ");
while(radio===true){
    console.log("Your new random number is: "+rand10());
    radio=readlineSync.keyInYN("Do you want an other one again? ");
}


//Exercise 4.1 -------------------------------------------------------------------------------------------------------------------------
// Function calcsurface calculate the aera in m2 of a rectangle or a losange
// @param {number} the length of the shape
// @param {number} the width of the shape
// @return {number} a random number

if(readlineSync.keyInYN("* * * E X E R C I C E  4.1 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
if(readlineSync.keyInYN("Do you want to see the documentation for the function calcSurface? ")){
    console.log("It's a function that caculate the aera of a shape with four sides. The calcul is simple; width*lenght. Let's go!")
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let userLength=readlineSync.question("What is the length,in meters, of your quadrilateral shape?");
let userWidth=readlineSync.question("What is the width, in meters, of your quadrilateral shape? ");

function calcSurface(a,b){
    return a*b;
}
console.log("Your quadrilateral shape got a surface of "+calcSurface(userLength,userWidth)+" m2.");


//Exercise 3.4 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  3.4 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
console.log("Your array is: "+arr+" and you want to know maximun and minimun value:")
console.log("Maximum Value: "+Math.max(...arr));
console.log("Minimum Value: "+Math.min(...arr));


//Exercise 3.3 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  3.3 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
console.log("Your initial array is: "+arr+" and you want to copy it, the same:")
for (let nb of arr) {
    newarr.push(nb);
}
console.log(`${newarr} It's a copy off an arr with push`);


//Exercise 3.2 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  3.2 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

for (let nb of arr) {
    i = i + nb;
}
console.log(i/arr.length);
var i=0;

for (let nb of arr1) {
    i = i + nb;
}
console.log(i/arr1.length);
var i=0;


//Exercise 3.1 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  3.1 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let som=null;
for (let nb of arr) {
    som = som + nb;
}
console.log(som);

for (let nb of arr1) {
    nbr = nbr + nb;
}
console.log(nbr); 


//Exercise 2.7 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  2.7 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let n = Number(readlineSync.question("Give me a number: "));
let quest;
let sum = 0;

while(i<n){
    i++;
    quest= Number(readlineSync.question("One more, please: "));
    sum = sum + quest
}
console.log("I have additionate " + n + " times your numbers and the sum is: " + sum);


//Exercise 2.6 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  2.6 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let day = Number(readlineSync.question("Donnes-moi un chiffre, et je te donne un jours: "));
if (day===1) {
    console.log("Monday!");
}
else if (day===2) {
    console.log("Tuesday!");
}
else if (day===3) {
    console.log("Wednesday!");
}
else if (day===4) {
    console.log("Thursday!");
}
else if (day===5) {
    console.log("Firday!");
}
else if (day===6) {
    console.log("Saturday!");
}
else if (day===7) {
    console.log("Sunday!");
}
else if (day>7) {
    console.log("Il n'y a que sept jours dans une semaine...");
}
else console.log("Un chiffre j'ai dis...")


//Exercise 2.5 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  2.5 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let numb;
do {
    numb = Number(readlineSync.question("Quel est ton chiffre favori?"));
    console.log("Non, tu te trompes, ce n'est pas LE chiffre que tu préféres...");
} while (numb!==42);


//Exercice 2.4 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  2.4 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

while(nbr<=100){
    
    nbr++;
    if((nbr%2)==0){
        console.log(nbr/2);
    }else console.log(nbr*3);
}


//Exercice 2.3 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  2.3 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

while(nbr<=100){
    
    nbr++;
    if((nbr%2)==0){
        console.log(`${nbr},`);
    }
}

// B O N U S Exercice 2.3 - - - - - - - - - - - - - - - - - - - - -
if(readlineSync.keyInYN("* * * B O N U S 2.3 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

for(i=2; i<=100; i=i+2)
{
  nbr = i;
  console.log(`${nbr},`);
  
}


//Exercice 2.2 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  2.2 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let min = Number(readlineSync.question("Give me a number: "));
let max = Number(readlineSync.question("Give me one again: "));
let current = Number(readlineSync.question("And an another number again: "));

if ((current>min) && (current<max)){
    console.log(`"${current}" est compris entre "${min}" et "${max}"!`);
}
else console.log("T'as rien compris à ce programme révolutionnaire, laisse tombé!");


//Exercice 2.1 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  2.1 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let age = Number(readlineSync.question("Please, can you tell me your age?"));
if(age>=18){
    console.log("Congrate, you can watch pornos!");
}
else
    console.log("Awesome! Maybe your parents still pay the rent");


//Exercice 1.8 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  1.8 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

if (readlineSync.keyInYN("Est-ce que tu veux que je te raconte une histoire?")) {
    
    if (readlineSync.keyInYN("Tu devras répondre à 5 questions. Es-tu prêt?")) {
        console.log("Génial! C'est parti!");
    }

    else console.log("Je m'en fou, c'est partit!");
}
else console.log("Je m'en fou! Tu vas répondre à mes 5 questions bordel!");



let ville = readlineSync.question("Quel est le village le plus proche de chez toi?");
let plat = readlineSync.question("Quel est ton plat préfèré?");

poison = ["l'arsenic","le cyanure", "le phénol", "le sarin"],
index = readlineSync.keyInSelect(poison, "Si tu devais empoissoner quelqu'un, ça serait plutôt avec ... ");

gout = ["sucré","salé","nature"],
choix = readlineSync.keyInSelect(gout, "Les pop-corns, tu les préfères plutôt... ");

let animal = readlineSync.question("Et pour finir, quel est ton animal favoris?");

console.log("D'aprés une études récente de l'université de "+ ville +", "+ poison[index] +" contenu dans les " + plat +" serait à l'origine de l'odeur quelques peu "+ gout +" des pets mouillés de la "+ animal +".")

//Exercice 1.7 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E 1.7 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let shoeSize = readlineSync.question("Can you tell me your shoe size please? ");
let birthYear = readlineSync.question("And your birth year, please? ");

console.log("You win "+ (((shoeSize*2 +5)*50)-birthYear)+1776+"€ ... No, it's a joke sorry!");


//Exercice 1.6 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  1.6 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let firstIntegrer = readlineSync.question("AGAIN! Give me an integer number beetween 5 et 15 please! ");
let secondIntegrer = readlineSync.question("and a second beetween 1 and 5! ");
console.log("It's possible to put " + Math.trunc(firstIntegrer/secondIntegrer) + " times \""+ secondIntegrer + "\" in "+firstIntegrer+ " and it will remain " + firstIntegrer%secondIntegrer)


//Exercice 1.5 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  1.5 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let firstNumber = readlineSync.question("Give me one number decimal, please!");
let secondNumber = readlineSync.question("Thank you... But I need one more, please!");
console.log("Your first number without decimal is: "+Math.trunc(firstNumber));
console.log("And the multiplication of both is: "+ firstNumber*secondNumber);


//Exercice 1.4 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  1.4 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let userFirstName = readlineSync.question("And your first name by the way?");
let userCity = readlineSync.question("Then, your city please?");
if (readlineSync.keyInYN("Thus, you tell me that you're "+userName+" "+userFirstName+", and that you live in "+userCity+"?")){
    console.log("Good! Let's dive in the second exercice!");}
else{
    console.log("Whatever! It's not important! Let's go to the second exercice");
}


//Exercice 1.3 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  1.3 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let userName = readlineSync.question("Can you give me your name please?");
console.log("Hello "+userName);


//Exercice 1.2 --------------------------------------------------------------------------------------------------------------------------
if(readlineSync.keyInYN("* * * E X E R C I C E  1.2 * * *")){
} else{
    readlineSync.question("Press Control Z: "); 
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

let name = "Charlène";
let firstName = "Bonnardeaux";
let city = "Bruxelles";
console.log("Your name is " + name + " " + firstName + " and you live in " + city +".");


//Exercice 1.1 --------------------------------------------------------------------------------------------------------------------------
let avariable = "* * * DEBUT DES EXERCICES * * *";
console.log(avariable);





