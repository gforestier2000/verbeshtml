console.log("début de mon programme");
// Les types de bases BNS
// 1 - Boolean => logique booléenne => Algèbre de Boole 
true;  // 1
false; // 0

!true;
!false;

// Table de vérité de ou logique : OR
true || true;    // => true     
true || false;   // => true     
false || true;   // => true     
false || false;  // => false    

// Table de vérité de et logique : AND
true && true;   // => true
true && false;  // => false
false && true;  // => false
false && false; // => false

// Autres opérateur logique comme le XOR, le NAND 

// Affichage de boolean
console.log("Table de vérité du OR, le OU logique")
console.log("false || false = ", false || false);
console.log("false || true  = ", false || true);
console.log("true  || false = ", true  || false);
console.log("true  || true  = ", true  || true);

// Affichage de boolean
console.log();
console.log();
console.log("Table de vérité du AND, le ET logique")
console.log("false && false = ", false && false);
console.log("false && true  = ", false && true);
console.log("true  && false = ", true  && false);
console.log("true  && true  = ", true  && true);

// 2 - Number
console.log("1 : ", 1);
console.log("1.2 : ", 1.2);
console.log("1+1 : ", 1+1);
console.log("1080*720 : ", 1080*720);

// 2.1 perimetre d'un carré de coté a. périmètre = a + a + a + a = 4 * a;
// a = 10
// perimetre = 4 * a = 4 * 10 = 40 

// utilisation d'une variable
// il faut la déclarer
let b = 20;
let perimetre = 4 * b;
console.log("Le périmètre du carré de coté " + b + " est de " + perimetre);

b = 50;
perimetre = 4 * b;
console.log("Le périmètre du carré de coté " + b + " est de " + perimetre);


// 3 - String = chaîne de caractères et identifiable par les doubles cotes " ... "
console.log("Guillaume");
console.log("Forestier");

console.log("Guillaume" + "++++++++" + "Forestier");

// Les typoes complexes AOK (array, objet, classe)


// Instructions de controle

// le IF (...) { ... } ELSE {...}
console.log("Mon super message 1")

if(false){
    console.log("Mon super message 2 - quand c'est vrai")
} else {
    console.log("Mon super message 2 - quand c'est faux")
}

console.log("Mon super message 3")



// Repeter un truc 
// FOR (...;...;...){}

for(let increment = 0; increment < 10; increment=increment+1){
    console.log("incrément = " + increment);
}

for(let i = 0; i < 10; i=i+1){
    console.log("incrément = " + i);
}

for(let i = 0; i < 10; i++){
    console.log("incrément = " + i);
}


for(let i = 0; i < 100; i++){
    console.log(i+1 + " : " + "Je dois arriver à l'heure chaque jour sinon je dois copier 100 fois cette ligne");
}

console.log("fin de mon programme");