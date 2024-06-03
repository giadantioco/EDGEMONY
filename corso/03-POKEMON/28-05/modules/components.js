const cardElGen = (obj) => {
	console.log('obj:', obj);
	const container = document.createElement('div');
	const imageEl = document.createElement('img');
	const titleEl = document.createElement('h2');
	const idEl = document.createElement('span');
	const typeEl = document.createElement('p');

	container.classList.add('card', obj.type);
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

export {
	cardElGen,
	cardListGen
}
