import { pokemon, pokemonTypes } from "./data/pokemon.js";
import { cardElGen, cardListGen, buttonGen } from "./modules/components.js";


const newPokemon = {
	id: 6,
	name: 'Charizard',
	type: 'fire',
	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
}

const mainSectionEl = document.querySelector('.main');

const btnAdd = document.querySelector('.btn-add');

const headerElement = document.querySelector('.header');

//prende una lista di tipi di pokemon
//cicla la lista e per ogni tipo genera un bottone 
// a ogni bottone viene associata una funzione che prende un tipo di pokemon e restituisce la lista filtrata di questi
const renderListTypePokemon = () => {
	return pokemonTypes.forEach(type => {
		const btnType = buttonGen(`Type - ${type}`, type);

		btnType.addEventListener('click', function () {
			const newArray = pokemon.filter(pokemonsingolo => pokemonsingolo.type === this.id)
			console.log(newArray.length ? newArray : 'Non esistono pokemon con questo tipo')
		})
		headerElement.append(btnType);
	})
}

const renderListCard = () => {
	mainSectionEl.innerHTML = ""

	const cardList = cardListGen();

	pokemon.forEach((singlePokemon) => {
		const cardEl = cardElGen(singlePokemon);
		cardList.append(cardEl);
	})

	return cardList
}

window.onload = mainSectionEl.append(renderListTypePokemon(), renderListCard());

btnAdd.addEventListener("click", function () {

	const isEqual = pokemon.some(i => i.id === newPokemon.id)

	if (isEqual) {

		console.log("Il pokemon esiste già!");
	} else {
		pokemon.push(newPokemon)
		mainSectionEl.append(renderListCard())
	}
})








