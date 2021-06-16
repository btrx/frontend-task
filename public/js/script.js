document.querySelectorAll('.dropdown-btn').forEach((item) => {
	item.addEventListener('click', (event) => {
		console.log('click!');
		let dropdownCollapse = item.nextElementSibling;

		if (!item.classList.contains('collapsing')) {
			if (!item.classList.contains('open')) {
				console.log('toggle dropdown button');

				dropdownCollapse.style.display = 'block';
				let dropdownHeight = dropdownCollapse.clientHeight;
				console.log(dropdownHeight);

				setTimeout(() => {
					dropdownCollapse.style.height = dropdownHeight + 'px';
					dropdownCollapse.style.display = '';
				}, 1);

				dropdownCollapse.classList = 'dropdown-contents__collapse collapsing';

				setTimeout(() => {
					console.log('open dropdown content');
					dropdownCollapse.classList = 'dropdown-contents__collapse collapse open';
				}, 300);
			}
			else {
				dropdownCollapse.classList = 'dropdown-contents__collapse collapsing';

				setTimeout(() => {
					dropdownCollapse.style.height = '0px';
				}, 1);

				setTimeout(() => {
					console.log('close dropdown content');
					dropdownCollapse.classList = 'dropdown__collapse collapse';
					dropdownCollapse.style.height = '';
				}, 300);
			}

			item.classList.toggle('open');
		}
	});
});
