// document.querySelector('.toTop').addEventListener("click", function () {
// 	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
// })

// show/hide settings
document.querySelector(".js-settings").addEventListener("click", function() {
	document.querySelector(".settings__list").classList.toggle("settings__list--hide");
})

// mode
document.querySelector(".js-mode").addEventListener("click", function() {
	if(document.querySelector("body").classList.contains("dark-mode")) {
		document.querySelector(".js-mode .btn-text").innerHTML = "Dark Mode";
	} else {
		document.querySelector(".js-mode .btn-text").innerHTML = "Light Mode";
	}
	document.querySelector(".js-mode .btn-icon i").classList.toggle("fa-sun");
	document.querySelector(".js-mode .btn-icon i").classList.toggle("fa-moon");
	document.querySelector("body").classList.toggle("dark-mode");
})

// motion
document.querySelector(".js-motion").addEventListener("click", function() {
	if(document.querySelector("body").classList.contains("disable-motion")) {
		document.querySelector(".js-motion .btn-text").innerHTML = "Disable Motion";
	} else {
		document.querySelector(".js-motion .btn-text").innerHTML = "Enable Motion";
	}
	document.querySelector("body").classList.toggle("disable-motion");
	document.querySelector(".js-motion .btn-icon i").classList.toggle("fa-stop");
	document.querySelector(".js-motion .btn-icon i").classList.toggle("fa-play");
})

// hero circles
var html = '';
for (var i = 1; i <= 25; i ++) {
  if (i % 3 == 0) {
    html += '<div class="circle circle--'+i+' circle-reverse"></div>';
  } else {
    html += '<div class="circle circle--'+i+'"></div>';
  }
  
}
document.querySelector('.circles').innerHTML += html;

// fixed header
window.addEventListener("scroll", function () {
	if(window.scrollY > 100) {
		document.querySelector("header").classList.add("fixed");
	} else {
		document.querySelector("header").classList.remove("fixed");
	}
})

// remove cutout on header
window.addEventListener('resize', function() {
	if(window.innerWidth > 1024) {
		document.querySelector("header").classList.add("p-cutout-5");
	} else {
		document.querySelector("header").classList.remove("p-cutout-5");
	}
})

// nav
document.querySelector(".nav__icon").addEventListener("click", function () {
	document.querySelector(".nav").classList.toggle("nav-open");
})