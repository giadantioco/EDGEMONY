import { pokemon } from "./data/pokemon.js";
import { cardElGen, cardListGen } from "./modules/components.js";

// generare tante card quanti sono i pokemon nella lista 

const mainSectionEl = document.querySelector('.main');
const cardList = cardListGen();

for (let i = 0; i <= pokemon.length - 1; i++) {
	const cardEl = cardElGen(pokemon[i]);
	cardList.append(cardEl);
}

window.onload = mainSectionEl.append(cardList);



