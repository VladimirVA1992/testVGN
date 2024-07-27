const DOM = document;

const hamb = DOM.querySelector("#hamb");
const popup = DOM.querySelector("#popup");
const body = DOM.body;

const menu = DOM.querySelector("#menu").cloneNode(1);

let openMenu = (event) => {
	event.preventDefault();

	popup.classList.toggle("open");
	hamb.classList.toggle("active");
	body.classList.toggle("noscroll");

	adMenuItems();
};

hamb.addEventListener("click", openMenu);

let adMenuItems = () => {
	popup.appendChild(menu);
};

const links = Array.from(menu.children);

let closeMenu = () => {
	popup.classList.remove("open");
	hamb.classList.remove("active");
	body.classList.remove("noscroll");
};

links.forEach((link) => {
	link.addEventListener("click", closeMenu);
});
