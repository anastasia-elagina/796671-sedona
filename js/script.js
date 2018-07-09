var link = document.querySelector(".button.button-text");
var form = document.querySelector(".search-hotel");
var entery = form.querySelector("[name=date-of-arrive]")

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("modal-show");
	entery.focus();
});
