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

const mainSectionEl = document.querySelector('.main');

const btnAdd = document.querySelector('.btn-add');

const renderListCard = () => {
	mainSectionEl.innerHTML = ""

	const cardList = cardListGen();

	/* 	for (let i = 0; i <= pokemon.length - 1; i++) {
			const cardEl = cardElGen(pokemon[i]);
			cardList.append(cardEl);
		} */

	pokemon.forEach((singlePokemon) => {
		const cardEl = cardElGen(singlePokemon);
		cardList.append(cardEl);
	})

	return cardList
}

window.onload = mainSectionEl.append(renderListCard());

btnAdd.addEventListener("click", function () {
	// Aggiungiamo la card alla lista

	const isEqual = pokemon.some(i => i.id === newPokemon.id)

	if (isEqual) {

		console.log("Il pokemon esiste già!");
	} else {
		pokemon.push(newPokemon)
		mainSectionEl.append(renderListCard())
	}
})







