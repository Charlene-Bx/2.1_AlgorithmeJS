//Installe la library "ReadLine-sync"
const readlineSync = require("readline-sync");

// V A R I A B L E S //
var nbr = 0; 
var i = 0;
var x = 0;

//Exercise 2.7
let n = Number(readlineSync.question("Give me a number: "));
let quest;
let sum = 0;

while(i<n){
    i++;
    quest= Number(readlineSync.question("One more, please: "));
    sum = sum + quest
}
console.log(sum);

//Exercise 2.6
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

//Exercise 2.5
let numb;
do {
    numb = Number(readlineSync.question("Quel est ton chiffre favori?"));
    console.log("Non, tu te trompes, ce n'est pas LE chiffre que tu préféres...");
} while (numb!==42);

//Exercice 2.4

while(nbr<=100){
    
    nbr++;
    if((nbr%2)==0){
        console.log(nbr/2);
    }else console.log(nbr*3);
}

//Exercice 2.3

while(nbr<=100){
    
    nbr++;
    if((nbr%2)==0){
        console.log(`${nbr},`);
    }
}
// B O N U S Exercice 2.3

for(i=2; i<=100; i=i+2)
{
  nbr = i;
  console.log(`${nbr},`);
  
}

//Exercice 2.2
let min = Number(readlineSync.question("Give me a number: "));
let max = Number(readlineSync.question("Give me one again: "));
let current = Number(readlineSync.question("And an another number again: "));

if ((current>min) && (current<max)){
    console.log(`"${current}" est compris entre "${min}" et "${max}"!`);
}
else console.log("T'as rien compris à ce programme révolutionnaire, laisse tombé!");

//Exercice 2.1
let age = Number(readlineSync.question("Please, can you tell me your age?"));
if(age>=18){
    console.log("Congrate, you can watch pornos!");
}
else
    console.log("Awesome! Maybe your parents still pay the rent");


//Exercice 1.8
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

//Exercice 1.7
let shoeSize = readlineSync.question("Can you tell me your shoe size please? ");
let birthYear = readlineSync.question("And your birth year, please? ");

console.log("You win "+ (((shoeSize*2 +5)*50)-birthYear)+1776+"€ ... No, it's a joke sorry!");

//Exercice 1.6
let firstIntegrer = readlineSync.question("AGAIN! Give me an integer number beetween 5 et 15 please! ");
let secondIntegrer = readlineSync.question("and a second beetween 1 and 5! ");
console.log("It's possible to put " + Math.trunc(firstIntegrer/secondIntegrer) + " times \""+ secondIntegrer + "\" in "+firstIntegrer+ " and it will remain " + firstIntegrer%secondIntegrer)

//Exercice 1.5
let firstNumber = readlineSync.question("Give me one number decimal, please!");
let secondNumber = readlineSync.question("Thank you... But I need one more, please!");
console.log("Your first number without decimal is: "+Math.trunc(firstNumber));
console.log("And the multiplication of both is: "+ firstNumber*secondNumber);

//Exercice 1.4
let userFirstName = readlineSync.question("And your first name by the way?");
let userCity = readlineSync.question("Then, your city please?");
if (readlineSync.keyInYN("Thus, you tell me that you're "+userName+" "+userFirstName+", and that you live in "+userCity+"?")){
    console.log("Good! Let's dive in the second exercice!");}
else{
    console.log("Whatever! It's not important! Let's go to the second exercice");
}
//Exercice 1.3
let userName = readlineSync.question("Can you give me your name please?");
console.log("Hello "+userName);

//Exercice 1.2
let name = "Charlène";
let firstName = "Bonnardeaux";
let city = "Bruxelles";
console.log("Your name is " + name + " " + firstName + " and you live in " + city +".");

//Exercice 1.1
let avariable = "* * * DEBUT DES EXERCICES * * *";
console.log(avariable);








