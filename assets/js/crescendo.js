// function for navigation
if (document.querySelector(".nav-icon")) {
	document.querySelector(".nav-icon").addEventListener("click", function() {
		document.querySelector(".nav-list").classList.toggle("mobile-show");
		document.querySelector(".nav-icon").classList.toggle("close");
		if (document.querySelector(".nav-icon").classList.contains("close")) {
			document.querySelector(".nav-icon--close").style.display = "inherit";
			document.querySelector(".nav-icon--menu").style.display = "none";
		} else {
			document.querySelector(".nav-icon--close").style.display = "none";
			document.querySelector(".nav-icon--menu").style.display = "inherit";
		}
	});
}

// function for topples
const folds = Array.from(document.querySelectorAll(".fold"));
if (folds.length > 0) {
	for (let i = 0; i < folds.length; i++) {
		folds[i].addEventListener("click", function() {
			let dataFold = this.getAttribute("data-fold");
			let toFold = document.querySelector("#" + dataFold);
			let fold = folds[i];
			if (toFold.classList.contains("folded")) {
				toFold.classList.remove("folded");
				toFold.classList.add("unfolded");
				fold.classList.remove("folded");
				fold.classList.add("unfolded");
			} else {
				toFold.classList.remove("unfolded");
				toFold.classList.add("folded");
				fold.classList.remove("unfolded");
				fold.classList.add("folded");
			}
		});
	}
}
