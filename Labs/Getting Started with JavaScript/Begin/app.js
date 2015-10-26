'use strict'

function changeStyle(div, style, text) {
	div.className = style;
	div.innerHTML = text;
}

var btnError = document.getElementById('showError');
btnError.addEventListener('click', function() {
	var errorDiv = document.getElementById('error');
	changeStyle(errorDiv, "showError", "There is an error in the data");
});

var btnClear = document.getElementById('clearError');
btnClear.addEventListener('click', function() {
	var errorDiv = document.getElementById('error');
	changeStyle(errorDiv, "clearError", "Error has been cleared");
});

