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
// console.log(scores);


for (var i = 0; i < scores.length; i++) {
	// console.log(scores[i]);

	if (scores[i] < 60) {
		console.log(scores[i] + " = F");
	}

	else if (scores[i] < 70) {
		console.log(scores[i] + " = D");
	}

	else if (scores[i] < 80) {
		console.log(scores[i] + " = C");
	}

	else if (scores[i] < 90) {
		console.log(scores[i] + " = B");
	}

	else {
		console.log(scores[i] + " = A");	
	}
}	

var max_of_array = Math.max.apply(Math, scores);
console.log("The highest grade: " + max_of_array);

var min_of_array = Math.min.apply(Math, scores);
console.log("The lowest grade: " + min_of_array);

// var gradesDiv = document.getElementById("gradesDiv");
// gradesDiv.innerHTML += "<div>" + scores[i] + "</div>";

// switch(true){
	// case scores[i] < 60
	// 	gradeF.f++;
	// 	console.log("F");
	// 	break;
	// case scores[i] < 70
	// 	gradeF.d++;
	// 	console.log("D");
	// 	break;	
	// }	

