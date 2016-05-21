var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"],
	  reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"],
	  colorsLength = colors.length,
 // reindeerLength for nested loops trial and error
	  reindeerLength = reindeer.length;

var hohohoElement = document.getElementById("coloredReindeer");
	  

console.log("DOM Element containing reindeer list", hohohoElement);

// function for building up my HTML string to apply to the DOM
var buildHTML = function buildString () {
	var htmlString = '<ul>';
	
	for (var i = 0; i < colorsLength; i++) {
		for (var j = 0; j < reindeerLength; j++) {
			// if statement to make sure that only valid names and colors will print. 
			// will only build a string when array indexes match
			// also prevents inner loop from running a full cycle on every outerloop ++
			if (i === j) {
					htmlString += '<li>';
					htmlString += colors[i] + ' ';
					htmlString += reindeer[j];
					htmlString += '</li>';
				} 
			}
		}
	htmlString += '</ul>';
	return htmlString;
};

// add my htmlString to the DOM
hohohoElement.innerHTML = buildHTML();
