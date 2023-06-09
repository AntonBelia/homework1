'use strict';
// first task
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let userName1 = userNames[0];
let userName2 = userNames[1];
let userName3 = userNames[2];
let arrayUserName1 = userName1.split(' ');
let arrayUserName2 = userName2.split(' ');
let arrayUserName3 = userName3.split(' ');
let initialsUserName1 = arrayUserName1.map(part => part[0]).join(".").split(' ');
let initialsUserName2 = arrayUserName2.map(part => part[0]).join(".").split(' ');
let initialsUserName3 = arrayUserName3.map(part => part[0]).join(".").split(' ');
const initials = initialsUserName1.concat(initialsUserName2, initialsUserName3);
initials.sort();
// console.log(initialsUserName1);
// console.log(typeof initialsUserName1);
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// second task
const currentMaxValue = 4589;
let reverseMaxValue;
let strMaxValue = currentMaxValue.toString();
let arrayMaxValue = strMaxValue.split('');
let revers = arrayMaxValue.reverse();
let arrayRevers = revers.join('');
reverseMaxValue = parseInt(arrayRevers);
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// third task
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;
let flating = resultsArray.flat(Infinity);
let initValue = 1;
const multOfValues = flating.reduce(
		(prev, current) => {
			return prev * current;
		},
		initValue
	);
productOfArray = multOfValues;
console.log(productOfArray); // 24

