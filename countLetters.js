const countLetters = function findAllUniqueChars(checkIt) {

		let checkArray = checkIt.split('');


	const comparator = {
		checker: 	checkIt.split(''),
		filterL: 	function(){
			return checkArray.filter(this.onlyUnique);
		},
		//filterN: 	filterL,
		reference:  0,

		checkAgaints() {
			//console.log(this);
		},

		report() {
			comparator.filterL.forEach((reportL) => {
				console.log("Found: '" + reportL + "' " + comparator.reportN[reference] 
					+ " ammount of times.");

				comparator.reference ++;
			});

			comparator.reference = 0

			return 0;
		},

		onlyUnique(value, index, self) {
			return self.indexOf(value) === index;
		}
	}

	
	console.log(comparator.filterL());
	console.log(checkArray.filter);

}

countLetters("blahhffsad");