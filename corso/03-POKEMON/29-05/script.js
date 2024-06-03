// Importiamo i dati dei Pokémon e le funzioni per generare gli elementi delle card
import { pokemon } from "./data/pokemon.js";
import { cardElGen, cardListGen } from "./modules/components.js";

// Creiamo un nuovo oggetto Pokémon chiamato 'Charizard'
// Ci serve solo in questo momento in cui implementiamo, un passo alla volta, l'aggiunta di un Pokemon
// Domani questo metodo si evolverà
const newPokemon = {
	id: 6,
	name: 'Charizard',
	type: 'fire',
	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
}

// Selezioniamo l'elemento HTML con la classe 'main' e lo assegnamo a mainSectionEl
const mainSectionEl = document.querySelector('.main');

// Selezioniamo il bottone con la classe 'btn-add' e lo assegnamo a btnAdd
const btnAdd = document.querySelector('.btn-add');

// Definiamo una funzione per renderizzare e visualizzare la lista delle card
const renderListCard = () => {
	// Svuotiamo il contenuto dell'elemento mainSectionEl per evitare duplicati
	// Attenzione: ho scelto questa soluzione per ridurre al minimo le operazioni da scrivere ed eseguire sul DOM
	mainSectionEl.innerHTML = ""

	// Generiamo un nuovo elemento lista delle card
	const cardList = cardListGen();

	// Cicliamo attraverso tutti i Pokémon e generiamo una card per ognuno di essi
	for (let i = 0; i <= pokemon.length - 1; i++) {
		const cardEl = cardElGen(pokemon[i]); // Creiamo una card per il Pokémon corrente
		cardList.append(cardEl); // Aggiungiamo la card alla lista
	}

	// Restituiamo la lista delle card
	return cardList
}

// Quando la finestra del browser si carica, appendiamo (aggiungiamo) la lista delle card all'elemento mainSectionEl
window.onload = mainSectionEl.append(renderListCard());

// Aggiungiamo un listener per il click del bottone btnAdd
btnAdd.addEventListener("click", function () {
	// Aggiungiamo il nuovo Pokémon all'array dei Pokémon
	pokemon.push(newPokemon)

	// Resettiamo il contenuto dell'elemento mainSectionEl e aggiorniamo la visualizzazione delle card
	// Questo passaggio è necessario per evitare duplicati delle card già esistenti.
	mainSectionEl.append(renderListCard())
})





