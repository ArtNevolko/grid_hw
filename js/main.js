document.querySelectorAll('.gal__like').forEach(btn => {
	btn.addEventListener('click', function () {
		btn.classList.toggle('liked');
	});
});