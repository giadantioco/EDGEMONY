/*
Esercizi: 
- definiamo variabile che contiene una stringa
    - usiamo doppi apicie salviamo stringa : Ciao Mondo!
    - usiamo singoli apici e salviamo la stringa : Mio zio viene dalla citta dell'acquila
        - occhio ai singoli apici
    - usiamo il backtick per concatenare le due stringhe precedenti dentro una nuova, usando anche l'andata a capo

- Creiamo una nuova variabile in sui inseriamo una variabile precedente che modifichiamo portando il tutto in maiuscolo
- Definiamo una variabile e salviamo all'interno un dato passato dall'utente prompt()
    - Facciamo un console.log() del dato precedente portato a lowercase

- Chiediao al nostro user un numero da umno a dieci tramite prompt esolose maggiore di 7 esclamare in console.se ha vinto
    -tips: 
    prompt("Dammi un numero da uno a dieci!") // occhio che il prompt torna una stringa!
    if(... > 7) {

    }
*/

// <---- Definiamo variabile che contiene una stringa ---->
// usiamo doppi apicie salviamo stringa : Ciao Mondo!
const doubleString = "Ciao Mondo!";
console.log(doubleString)

// usiamo singoli apici e salviamo la stringa : Mio zio viene dalla citta dell'acquila
const string = 'Mio zio viene dalla città di l\'Acquila';
console.log(string)

// usiamo il backtick per concatenare le due stringhe precedenti dentro una nuova, usando anche l'andata a capo
const stringConcat = `${doubleString}.

${string}`;
console.log(stringConcat);

// <---- Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portando il tutto in maiuscolo ---->
const newString = doubleString.toUpperCase(); // -> variabili mutate in maiuscolo andrebbero scritte in maiuscolo CIAO_MONDO
console.log(newString);

const newString2= string;
console.log(newString2.toUpperCase());

// <---- Definiamo una variabile e salviamo all'interno un dato passato dall'utente prompt() ---->
const userPrompt = prompt("insert your name");
console.log(userPrompt);
// si poteva fare anche
// const inputUtente = prompt('A cosa stai pensando')

// Facciamo un console.log() del dato precedente portato a lowercase
console.log(userPrompt.toLowerCase());

/*
<---- Chiediao al nostro user un numero da uno a dieci tramite prompt e solo se maggiore di 7 esclamare in console se ha vinto ---->
    -tips: 
    prompt("Dammi un numero da uno a dieci!") // occhio che il prompt torna una stringa!
    if(... > 7) {

    }
*/
const userInput = prompt("insert a number from 1 to 10");
const userInputNumber = Number(userInput);
console.log(userInputNumber);
console.log(typeof userInputNumber);

let num = userInputNumber; 
if (num > 7) {
    alert(`Number ${num} is bigger than seven, you Win!`)
} else {
    alert(`Sorry, number ${num} is smaller than seven! You lose`)
    // window.relocation.reload() //fa il reload della pagina
    // window.location = 'https...'; reload su altra pagina
}

let number = userInputNumber; 
if (number <= 10 && number > 0) {
   
    if(number > 7) {
        alert(`Number ${number} is bigger than seven, you Win!`)
    } else {
        alert(`Sorry, number ${number} is smaller than seven! You lose`)
        // window.relocation.reload() //fa il reload della pagina
        // window.location = 'https...'; reload su altra pagina
    }
} else {
    alert(`you're cheating`)
    // window.relocation.reload() //fa il reload della pagina
    // window.location = 'https...'; reload su altra pagina
}

// logical operator '&&' torna 'true' solo sse tutte le condizioni sono true, se la prima condizione è falsa non controlla neanche le altre
// logical operator '||' torna true se almeno una condizione è true, legge fino a quando non ne trova una


