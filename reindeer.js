var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"],
	  reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"],
	  colorsLength = colors.length,
 // reinderLength for nested loops trial and error
	  reindeerLength = reindeer.length;

var hohohoElement = document.getElementById("coloredReindeer");
	  

console.log("DOM Element containing reindeer list", hohohoElement);

// function for building up my HTML string to apply to the DOM
var buildHTML = function buildString () {
	var htmlString = '<ul>';

	for (var i = 0; i < colorsLength; i++) {
			  // if (colors[i] !== (reindeer[i] - 1)) {
			  	// if colors index does not match reindeer's, do nothing
			  	// my attempt to precent 'undefined' from being rendered to the page
					htmlString += '<li>';
					htmlString += colors[i] + ' ';
					htmlString += reindeer[i];
					htmlString += '</li>';
		// }
			}
	htmlString += '</ul>';
	return htmlString;
};

// add my htmlString to the DOM
hohohoElement.innerHTML = buildHTML();
