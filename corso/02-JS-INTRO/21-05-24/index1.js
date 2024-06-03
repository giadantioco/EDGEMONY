// -- FUNZIONI

// 1- keyword function 
// 2- nome della funzione
// 3- parametri -> dati che passiamo alla funzione e sono disponibili al suo interno
// 4- corpo della funzione {}
// 5- 'return' da la possibilità alla function di tornare un dato usabile da altre parti
function sum (a, b) {
    const result = a + b;

    return result // output della function, se non ce return ritorna undefined 
}

// posso eseguire la function solo tramite ()
const mySum = sum(1, 2); // invocazione della funzione (1 e 2 sono parametri)

// --- ESEMPI
// function di log
function log(message) {
    console.log(message)
}

log;
log('ciao mondo') 
// prima legge  uello che sta dentro le parentesi, poi quello che sta fuori, perche viene letto prima il parametro 

// il valorre di ritorno della funzione e' quello che sisalva nella variabile, se non ce return esegue il codice, ma non ritorna niente, anche se lo salvi in una variabile