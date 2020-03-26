document.addEventListener('DOMContentLoaded', () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll('.navbar-burger'),
		0
	);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach(el => {
			el.addEventListener('click', () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});

let button = document.getElementById('button');
let button2 = document.getElementById('button-2');
let button3 = document.getElementById('button-3');
let button4 = document.getElementById('button-4');
let modal = document.getElementById('page-modal');
let modal2 = document.getElementById('page-modal-2');
let modal3 = document.getElementById('page-modal-3');
let modal4 = document.getElementById('page-modal-4');
let closeButton = document.getElementById('delete-1');
let closeButton2 = document.getElementById('delete-2');
let closeButton3 = document.getElementById('delete-3');
let closeButton4 = document.getElementById('delete-4');

button.addEventListener('click', function(event) {
	modal.style.display = 'inline-flex';
});
button2.addEventListener('click', function(event) {
	modal2.style.display = 'inline-flex';
});
button3.addEventListener('click', function(event) {
	modal3.style.display = 'inline-flex';
});
button4.addEventListener('click', function(event) {
	modal4.style.display = 'inline-flex';
});
closeButton.addEventListener('click', function(event) {
	modal.style.display = 'none';
});
closeButton2.addEventListener('click', function(event) {
	modal2.style.display = 'none';
});
closeButton3.addEventListener('click', function(event) {
	modal3.style.display = 'none';
});
closeButton4.addEventListener('click', function(event) {
	modal4.style.display = 'none';
});
