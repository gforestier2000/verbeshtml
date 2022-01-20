// Javascript

// Les types de bases BNS
// Boolean
// Number
// String

1 + 1;

// utiliser une fonction de JavaScript : console.log(...);
// https://developer.mozilla.org/fr/docs/Web/API/Console/log

// La méthode console.log() affiche un message dans la console Web. 
// Le message peut être une simple chaine de caractères (avec des valeurs 
// optionnelles de substitution) ou peut être composé d'un ou plusieurs objets JavaScript.

console.log("Début programme verbe2.js");

// Commençons par les Numbers
console.log("Table des 1 de 1 à 12");
console.log("1 * 1  = ", 1 * 1);
console.log("2 * 1  = ", 2 * 1);
console.log("3 * 1  = ", 3 * 1);
console.log("4 * 1  = ", 4 * 1);
console.log("5 * 1  = ", 5 * 1);
console.log("6 * 1  = ", 6 * 1);
console.log("7 * 1  = ", 7 * 1);
console.log("8 * 1  = ", 8 * 1);
console.log("9 * 1  = ", 9 * 1);
console.log("10 * 1  = ", 10 * 1);
console.log("11 * 1  = ", 11 * 1);
console.log("12 * 1  = ", 12 * 1);

console.log("Table des 3 de 1 à 12");
console.log("1 * 3  = ", 1 * 3);
console.log("2 * 3  = ", 2 * 3);
console.log("3 * 3  = ", 3 * 3);
console.log("4 * 3  = ", 4 * 3);
console.log("5 * 3  = ", 5 * 3);
console.log("6 * 3  = ", 6 * 3);
console.log("7 * 3  = ", 7 * 3);
console.log("8 * 3  = ", 8 * 3);
console.log("9 * 3  = ", 9 * 3);
console.log("10 * 3  = ", 10 * 3);
console.log("11 * 3  = ", 11 * 3);
console.log("12 * 3  = ", 12 * 3);

console.log("Table des 8 de 1 à 12");
console.log("1 * 8  = ", 1 * 8);
console.log("2 * 8  = ", 2 * 8);
console.log("3 * 8  = ", 3 * 8);
console.log("4 * 8  = ", 4 * 8);
console.log("5 * 8  = ", 5 * 8);
console.log("6 * 8  = ", 6 * 8);
console.log("7 * 8  = ", 7 * 8);
console.log("8 * 8  = ", 8 * 8);
console.log("9 * 8  = ", 9 * 8);
console.log("10 * 8  = ", 10 * 8);
console.log("11 * 8  = ", 11 * 8);
console.log("12 * 8  = ", 12 * 8);

// Ma première variable :
let base = 7;

console.log("Table des " + base + " de 1 à 12");
console.log(" 1 * " + base + "  = ", 1 * base);
console.log(" 2 * " + base + "  = ", 2 * base);
console.log(" 3 * " + base + "  = ", 3 * base);
console.log(" 4 * " + base + "  = ", 4 * base);
console.log(" 5 * " + base + "  = ", 5 * base);
console.log(" 6 * " + base + "  = ", 6 * base);
console.log(" 7 * " + base + "  = ", 7 * base);
console.log(" 8 * " + base + "  = ", 8 * base);
console.log(" 9 * " + base + "  = ", 9 * base);
console.log("10 * " + base + "  = ", 10 * base);
console.log("11 * " + base + "  = ", 11 * base);
console.log("12 * " + base + "  = ", 12 * base);


// LES FONCTIONS 

// Je déclare une fonction avec laNotationCamel

function afficherMultiplicationDeUnADouze(base) {
    console.log("Table des " + base + " de 1 à 12");
    console.log(" 1 * " + base + "  = ", 1 * base);
    console.log(" 2 * " + base + "  = ", 2 * base);
    console.log(" 3 * " + base + "  = ", 3 * base);
    console.log(" 4 * " + base + "  = ", 4 * base);
    console.log(" 5 * " + base + "  = ", 5 * base);
    console.log(" 6 * " + base + "  = ", 6 * base);
    console.log(" 7 * " + base + "  = ", 7 * base);
    console.log(" 8 * " + base + "  = ", 8 * base);
    console.log(" 9 * " + base + "  = ", 9 * base);
    console.log("10 * " + base + "  = ", 10 * base);
    console.log("11 * " + base + "  = ", 11 * base);
    console.log("12 * " + base + "  = ", 12 * base);
}

// J'appelle/j'utilise ma fonction
afficherMultiplicationDeUnADouze(1);
afficherMultiplicationDeUnADouze(2);
afficherMultiplicationDeUnADouze(3);
afficherMultiplicationDeUnADouze(4);
afficherMultiplicationDeUnADouze(5);
afficherMultiplicationDeUnADouze(6);
afficherMultiplicationDeUnADouze(7);
afficherMultiplicationDeUnADouze(8);
afficherMultiplicationDeUnADouze(9);
afficherMultiplicationDeUnADouze(10);


// Je déclare une fonction
function afficherMultiplicationDeUnADouzeEncoreMieux(base) {
    console.log("DEBUT de la fonction afficherMultiplicationDeUnADouzeEncoreMieux()");
    // Déclaration d'une variable DANS la fonction
    let multiplicateur = 1;


    console.log("Table des " + base + " de 1 à 12");
    console.log(" 1 * " + base + "  = ", 1 * base);
    console.log(" 2 * " + base + "  = ", 2 * base);
    console.log(" 3 * " + base + "  = ", 3 * base);
    console.log(" 4 * " + base + "  = ", 4 * base);
    console.log(" 5 * " + base + "  = ", 5 * base);
    console.log(" 6 * " + base + "  = ", 6 * base);
    console.log(" 7 * " + base + "  = ", 7 * base);
    console.log(" 8 * " + base + "  = ", 8 * base);
    console.log(" 9 * " + base + "  = ", 9 * base);
    console.log("10 * " + base + "  = ", 10 * base);
    console.log("11 * " + base + "  = ", 11 * base);
    console.log("12 * " + base + "  = ", 12 * base);


    console.log("FIN de la fonction afficherMultiplicationDeUnADouzeEncoreMieux()");

}

afficherMultiplicationDeUnADouzeEncoreMieux(14);

console.log("Fin programme verbe2.js");