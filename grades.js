// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;

var AArray = [];
var BArray = [];
var CArray = [];
var DArray = [];
var FArray = [];

var DOM = document.getElementById("gradesDiv");


for (var i = 0; i < scores.length; i++) {
	// console.log(scores[i]);
	DOM.innerHTML = "<div>Here are the scores: "+scores+"</div>";
	if (scores[i] < 60) {
		F += 1;
		FArray.push(scores[i]);
	}

	else if (scores[i] < 70) {
		D += 1;
		DArray.push(scores[i]);
	}

	else if (scores[i] < 80) {
		C += 1;
		CArray.push(scores[i]);
	}

	else if (scores[i] < 90) {
		B += 1;
		BArray.push(scores[i]);
	}

	else {
		A += 1;
		AArray.push(scores[i]);
	}
}	

DOM.innerHTML += "<div>There are "+F+" F's: "+FArray+"</div>";
DOM.innerHTML += "<div>There are "+D+" D's: "+DArray+"</div>";
DOM.innerHTML += "<div>There are "+C+" C's: "+CArray+"</div>";
DOM.innerHTML += "<div>There are "+B+" B's: "+BArray+"</div>";
DOM.innerHTML += "<div>There are "+A+" A's: "+AArray+"</div>";

var max_of_array = Math.max.apply(Math, scores);
DOM.innerHTML += "<div>The highest grade: " + max_of_array;

var min_of_array = Math.min.apply(Math, scores);
DOM.innerHTML += "<div>The lowest grade: " + min_of_array+"</div>";


