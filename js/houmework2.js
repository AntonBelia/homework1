// 1 завдання
function durationBetweenDates(dateStart = new Date('02 Aug 2023'), dateEnd = new Date('04 Sep 2023'), dimension) {
	let subtraction = (new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / 1000;
	switch (dimension) {
		case 'seconds':
			return Math.abs(subtraction) + " seconds";
		case 'minutes':
			return Math.abs(subtraction / 60) + ' minutes';
		case 'hours':
			return Math.abs(subtraction / 60 / 60) + ' hours';
		case 'days':
			return Math.abs(subtraction / 60 / 60 / 24).toFixed() + ' days';
		default:
			return Math.abs(subtraction)*1000 + " milliseconds";
	}
};

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));


// 2 завдання 
const priceData = {
	Apples: '23.4',
	BANANAS: '48',
	oRAngGEs: '48.7584',
};

function optimizer(data) {
	const optimizerData = {};
	for (let key in data) {
		optimizerData[key.toLowerCase()] = parseFloat(data[key]).toFixed(2);
	}
	return optimizerData;
};

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);     // {apples: '23.40', bananas: '48.00', oranges: '48.76'}



// 3 завдання
function recursiveOddSumTo(number) {
	if (number === 1) {
		return number;
	}
	if (Number.isInteger(number / 2)) {
		return iterativeOddSumTo(number - 1);
	}
	return number + iterativeOddSumTo(number - 1);
}

console.log(recursiveOddSumTo(10));  //25

function iterativeOddSumTo(number) {
	let result = 0;
	for (let i = 0; i <= number; i++) {
		if (Number.isInteger(i / 2)) {
			result -= i;
		}
		result += i;
	}
	return result;
}

console.log(iterativeOddSumTo(10));  //25



