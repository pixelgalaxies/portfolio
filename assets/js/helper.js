const smoothLinks = document.querySelectorAll(".nav-list a");
for (const link of smoothLinks) {
	link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}

document.querySelector('.toTop').addEventListener("click", function () {

	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
})

document.querySelector('.toggleMode').addEventListener("click", function () {

	document.querySelector('body').classList.toggle("dark")
	document.querySelector('.toggleMode i').classList.toggle("fa-sun")
	document.querySelector('.toggleMode i').classList.toggle("fa-moon")
})