const div = document.querySelector('.counter');
const p = document.createElement('p');
const stopButton = document.createElement('button');
const startButton = document.createElement('button');

stopButton.className = 'stop';
startButton.className = 'start';
startButton.textContent = 'Start';
stopButton.textContent = 'Stop';

p.textContent = new Date();

div.append(startButton, stopButton);

// Funzione che esegue l'interval e restituisce l'ID dell'interval
// per poterlo fermare successivamente.
const runInterval = () => {

    // setInterval metodo che accetta una callback e un valore numerico (ms)
    // il valore numerico indica quanto tempo dura l'intervallo (delay)
    // la callback verrà eseguita ogni 1000ms in questo caso
    const id = setInterval(() => {
        p.textContent = new Date();
        console.log(p.textContent)
    }, 1000)

    return id;
}

// inizializziamo intervalId con la prima esecuzione della funzione runInterval()
let intervalId = runInterval();

// al click di startButton puliamo eventuali interval già in esecuzione
// ne facciamo partire uno nuovo
startButton.addEventListener('click', () => {
    clearInterval(intervalId)
    intervalId = runInterval();
});

// al click di stopButton fermiamo l'interval corrente
// log sull'id attuale dell'interval fermato.
stopButton.addEventListener('click', () => {
    console.log(intervalId);
    clearInterval(intervalId)
});

div.appendChild(p);