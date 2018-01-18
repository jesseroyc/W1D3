const countLetters = function findAllUniqueChars(checkIt) {

	const stringStats = {
		
		stringChars:     checkIt.split(''),
		uniqueChars:     checkIt.split('').filter(onlyUnique),
		instancesFound:  checkIt.split('').filter(onlyUnique),
	}

	function onlyUnique(value, index, self) { 
    	return self.indexOf(value) === index;
	}

	index = 0;

	stringStats.uniqueChars.forEach(function (uChar) {

		stringStats.instancesFound[index] = 0;

		stringStats.stringChars.forEach(function (sChar) {

			if(uChar === sChar) {
				stringStats.instancesFound[index] ++;
			}
		});

		console.log(stringStats.uniqueChars[index] + ": " + stringStats.instancesFound[index] + ",");
		index ++;
	});

	console.log('');

	return stringStats;

}


const test = process.argv.slice(2)

test.forEach(function (test) {
	countLetters(test);
});