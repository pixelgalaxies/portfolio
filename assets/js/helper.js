document.querySelector('.toTop').addEventListener("click", function () {
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
})
document.querySelector('.toggleMode').addEventListener("click", function () {
	document.querySelector('body').classList.toggle("dark")
	document.querySelector('.toggleMode i').classList.toggle("fa-sun")
	document.querySelector('.toggleMode i').classList.toggle("fa-moon")
})