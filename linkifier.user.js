// ==UserScript==
// @name        headings-linkifier
// @namespace   Virzen
// @include     ''
// @description Adds links to all heading on the page
// @version     1.0.0
// @grant       none
// ==/UserScript==

function toArray(a) {
	return Array.prototype.slice.call(a);
}

function createLinks() {
	const tags = 'h1 h2 h3 h4 h5 h6';
	let headers = [];
	
	// query DOM for each heading tag (h1 - h6)
	tags.split(' ').forEach(tag => {
		headers = headers.concat(toArray(document.querySelectorAll(tag)));
	});
	
	// replace insides of each heading with link
	headers.forEach((header, index) => {
		const text = header.textContent;
		const id = 'h' + index;
		header.innerHTML = '<a href="#' + id + '" style="color: inherit">' + text + '</a>';
		header.id = id;
	});
}

window.addEventListener('DOMContentLoaded', createLinks, false);
