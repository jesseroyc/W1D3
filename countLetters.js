const countLetters = function findAllUniqueChars(checkIt) {

	const stringStats = {
		
		stringChars:     checkIt.split(''),
		uniqueChars:     checkIt.split('').filter(onlyUnique),
		instancesFound:  checkIt.split('').filter(onlyUnique),
		positions:       [], 
	}

	function onlyUnique(value, index, self) { 
    	return self.indexOf(value) === index;
	}

	index = 0;

	stringStats.uniqueChars.forEach(function (uChar) {

		stringStats.instancesFound[index] = 0;

		let indexP = 0;
		stringStats.stringChars.forEach(function (sChar) {

			if(uChar === sChar) {
				stringStats.instancesFound[index] ++;
				stringStats.positions.push(indexP);
			}
			indexP++;

		});

		console.log(stringStats.uniqueChars[index] + 
			": " + stringStats.instancesFound[index] + ", found in array index positions: "
			+ stringStats.positions);
		index ++;
		stringStats.positions.length = 0;
	});

	console.log('');

	return stringStats;

}


const test = process.argv.slice(2)

test.forEach(function (test) {
	countLetters(test);
});