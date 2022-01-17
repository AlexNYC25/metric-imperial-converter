const mathjs = require('mathjs');

function ConvertHandler() {

	// helper function to count the number of occurences of a character in a string
	let countOccurrences = function(str, char) {
		let count = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === char) {
				count++;
			}
		}
		return count;
	};

	// find the index of the last number or symbol in a string
	let findLastNumberSymbol = function(str) {
		let lastNumberIndex = -1;
		for (let i = 0; i < str.length; i++) {
			if (str[i] >= '0' && str[i] <= '9' || str[i] === '.' || str[i] === '/') {
				lastNumberIndex = i;
			}
		}
		return lastNumberIndex + 1;
	};
  
	// finished inital version, needs tests written
  	this.getNum = function(input) {
		let result = ""

		for(let i = 0; i < input.length; i++) {
			// accept numbers, decimal point, and division sign
			if(!isNaN(input[i]) || input[i] === "." || input[i] === "/") {
				result += input[i];
			}
		}

		// if more then one deciaml point, return NaN
		if(countOccurrences(result, ".") > 1) {
			return null;
		}

		// check if there is more then one division sign
		if(countOccurrences(result, "/") > 1) {
			return null;
		}

		// check if there is a number after the division sign
		if(countOccurrences(result, "/") > 0) {
			// find the index of the division sign
			let index = result.indexOf("/");
			
			// check if there is a number after the division sign
			if(isNaN(result[index + 1])) {
				return null;
			}

			// checks too see if the number after the division sign is not a decimal number
			for(let i = index + 1; i < result.length; i++) {
				if(isNaN(result[i])) {
					return null;
				}
			}
		}

		// check if there is a number after the decimal point
		if(countOccurrences(result, ".") > 0) {
			// find the index of the decimal point
			let index = result.indexOf(".");
			// check if there is a number after the decimal point
			if(isNaN(result[index + 1])) {
				return null;
			}
		}

		// if theres is no number in the string return the default value of 1
		if(result === "") {
			return 1;
		}
		
		return mathjs.round(mathjs.evaluate(result), 14);
	};
  
	// finished inital version, needs tests written
	this.getUnit = function(input) {
		let result;

		// find the index of the last number in the string or symbol
		let index = findLastNumberSymbol(input);
		
		// get substring from the last number to the end of the string
		result = input.substring(index);

		// convert to lower case
		result = result.toLowerCase();
		
		// check if the result string contains a number
		for(let i = 0; i < result.length; i++) {
			if(!isNaN(result[i])) {
				return null;
			}
		}

		// check if the string is one of the valid units
		if(result === "gal" || result === "l" || result === "mi" || result === "km" || result === "lbs" || result === "kg" || result === "GAL" || result === "L" || result === "MI" || result === "KM" || result === "LBS" || result === "KG") {
			
			// convert to upper case for liter only
			if(result === "l" || result === "L") {
				result = result.toUpperCase();
			}
			
			return result;
		}

		
		return null;
	};
  
	this.getReturnUnit = function(initUnit) {
		let result = null;

		// convert to lower case
		if(initUnit !== null) {
			initUnit = initUnit.toLowerCase();
		}
		// check if the string is one of the valid units
		if(initUnit === "gal" || initUnit === "l" || initUnit === "mi" || initUnit === "km" || initUnit === "lbs" || initUnit === "kg" || initUnit === "GAL" || initUnit === "L" || initUnit === "MI" || initUnit === "KM" || initUnit === "LBS" || initUnit === "KG") {
			if(initUnit === "gal") {
				result = "L";
			} else if(initUnit === "l") {
				result = "gal";
			} else if(initUnit === "mi") {
				result = "km";
			} else if(initUnit === "km") {
				result = "mi";
			} else if(initUnit === "lbs") {
				result = "kg";
			} else if(initUnit === "kg") {
				result = "lbs";
			}
		}
		
		return result;
	};

  this.spellOutUnit = function(unit) {
	let result = null;

	// convert to lower case
	if(unit !== null) {
		unit = unit.toLowerCase();
	}

	// check if the string is one of the valid units
	if(unit === "gal" || unit === "l" || unit === "mi" || unit === "km" || unit === "lbs" || unit === "kg" || unit === "GAL" || unit === "L" || unit === "MI" || unit === "KM" || unit === "LBS" || unit === "KG") {
		if(unit === "gal") {
			result = "gallons";
		} else if(unit === "l") {
			result = "liters";
		} else if(unit === "mi") {
			result = "miles";
		} else if(unit === "km") {
			result = "kilometers";
		} else if(unit === "lbs") {
			result = "pounds";
		} else if(unit === "kg") {
			result = "kilograms";
		}
	}

	return result;
  };
  
  this.convert = function(initNum, initUnit) {
	const galToL = 3.78541;
	const lbsToKg = 0.453592;
	const miToKm = 1.60934;
	let result = null;

	// convert to lower case
	if(initUnit !== null) {
		initUnit = initUnit.toLowerCase();
	}

	// check if the string is one of the valid units
	if(initUnit === "gal" || initUnit === "l" || initUnit === "mi" || initUnit === "km" || initUnit === "lbs" || initUnit === "kg" || initUnit === "GAL" || initUnit === "L" || initUnit === "MI" || initUnit === "KM" || initUnit === "LBS" || initUnit === "KG") {
		if(initUnit === "gal") {
			result = initNum * galToL;
		} else if(initUnit === "l") {
			result = initNum / galToL;
			return mathjs.round(mathjs.evaluate(result), 5);
		} else if(initUnit === "mi") {
			result = initNum * miToKm;
		} else if(initUnit === "km") {
			result = initNum / miToKm;
			return mathjs.round(mathjs.evaluate(result), 5);
		} else if(initUnit === "lbs") {
			result = initNum * lbsToKg;
			return mathjs.round(mathjs.evaluate(result), 5);
		} else if(initUnit === "kg") {
			result = initNum / lbsToKg;
		}
	}
	
	return mathjs.round(mathjs.evaluate(result), 6);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
	let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
	
	return result;
  };
  
}

module.exports = ConvertHandler;
