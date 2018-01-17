const countLetters = function findAllUniqueChars(checkIt) {

	const stringStats = {
		
		
		uniqueChars:     checkIt.split('').filter(onlyUnique),
		instancesFound:  checkIt.split('').filter(onlyUnique),

		keyStore() {

		},

		output() {

			console.log(this.uniqueChar + ": " + this.instancesFound + ",");
		},
	}

	function onlyUnique(value, index, self) { 
    	return self.indexOf(value) === index;
	}

	console.log(stringStats.uniqueChars);

	return stringStats;

}

countLetters("blahhffsad");