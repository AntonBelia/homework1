// 1 завдання
function durationBetweenDates(dateStart, dateEnd, meaTime) {
	let date1 = new Date(dateStart).getTime() / 1000 || new Date('02 Aug 2023').getTime() / 1000;
	let date2 = new Date(dateEnd).getTime() / 1000 || new Date('04 Sep 2023').getTime() / 1000;
	switch (meaTime) {
		case 'seconds':
			return Math.abs(date2 - date1) + " seconds";
			break;
		case 'minutes':
			return Math.abs((date2 - date1) / 60) + ' minutes';
			break;
		case 'hours':
			return Math.abs((date2 - date1) / 60 / 60) + ' hours';
			break;
		case 'days':
			return Math.abs((date2 - date1) / 60 / 60 / 24).toFixed() + ' days';
			break;
		default:
			return Math.abs((date2 - date1) / 60 / 60 / 24).toFixed() + " days";
	}
};

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'minutes'));


// 2 завдання тільки в мене чомусь заокруглює не дуже правильно
const priceData = {
	Apples: '23.4',
	BANANAS: '48',
	oRAngGEs: '48.7584',
};

function optimizer(data) {
	const optimizerData = {};
	for (let key in data) {
		const updatedKey = key.toLowerCase();
		const updatedValues = Number(data[key]).toFixed(2);
		optimizerData[updatedKey] = updatedValues;
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



