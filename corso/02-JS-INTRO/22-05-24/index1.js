// Approfondimento functions

function func() {

}

console.log(func)

//fucntion anonima - salvata in variabile
const funct = function() {

}
console.log(funct) // leggendo / log della variabile - non farà niente
console.log(funct()) // richiamando/invocando la function dentro la varibile

//self calling function / funzione che si autoinvoca - ambiente chiuso, le variabili dichiarate qui dentro non verranno chiamate fuori
(function () {
    const funct = 'ciao';

    console.log('funct', funct);

    console.log('funzione anonima')
})();


// per poter leggere tutti i parametri di una function posso utilizzare 
// - "arguments" che mi torna un iterabile
// - metto i iparametri "(...MiaVariabile)" e MiaVaribile diventa un array con tutti i parametri
// - "..." ha come nome quello di rest operator