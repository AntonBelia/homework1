'use strict';
// нова гілка для редактування
// first task
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const initials = userNames.map(name => name.split(" ").map(part => part.charAt(0) + ".").join(""));
initials.sort();
// let userName1 = userNames[0];
// let userName2 = userNames[1];
// let userName3 = userNames[2];
// let arrayUserName1 = userName1.split(' ');
// let arrayUserName2 = userName2.split(' ');
// let arrayUserName3 = userName3.split(' ');
// let initialsUserName1 = arrayUserName1.map(part => part[0]).join(".").split(' ');
// let initialsUserName2 = arrayUserName2.map(part => part[0]).join(".").split(' ');
// let initialsUserName3 = arrayUserName3.map(part => part[0]).join(".").split(' ');
// const initials = initialsUserName1.concat(initialsUserName2, initialsUserName3);
// console.log(initialsUserName1);
// console.log(typeof initialsUserName1);
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// second task
const currentMaxValue = 4589;
let reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));
// let strMaxValue = currentMaxValue.toString();
// let arrayMaxValue = strMaxValue.split('');
// let revers = arrayMaxValue.reverse();
// let arrayRevers = revers.join('');
// reverseMaxValue = parseInt(arrayRevers);
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// third task
const resultsArray = [1, 2, [3, [4]]];
let flating = resultsArray.flat(Infinity);
let initValue = 1;
const productOfArray = flating.reduce(
	(prev, current) => {
		return prev * current;
	},
	initValue
);
console.log(productOfArray); // 24

