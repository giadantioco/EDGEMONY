const cardElGen = (obj) => {
	const container = document.createElement('div');
	const imageEl = document.createElement('img');
	const titleEl = document.createElement('h2');
	const idEl = document.createElement('span');
	const typeEl = document.createElement('p');

	container.classList.add('card', obj.type);
	container.id = obj.id;
	imageEl.src = obj.image;
	imageEl.className = "card__img"
	imageEl.alt = obj.name;

	titleEl.className = "card__title"
	titleEl.textContent = obj.name;

	idEl.className = "card__id"
	idEl.textContent = `# ${obj.id}`;

	typeEl.className = "card__type"
	typeEl.textContent = `Type: ${obj.type}`;

	container.append(imageEl, titleEl, idEl, typeEl);
	return container;
}

const cardListGen = () => {
	const container = document.createElement('div');

	container.className = "card-list";

	return container
}

const buttonGen = (text, id) => {
	const button = document.createElement('button');

	button.textContent = text;
	button.id = id;

	return button
}

export {
	cardElGen,
	cardListGen,
	buttonGen
}
