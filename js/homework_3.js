//  Task 1

// function addThemAll (a, b, ...args) {
// 	let sum = a + b;
//  	for (let arg of args) {
//   		sum += arg;
//   	}
//   return sum;
// }

// console.log(addThemAll(2,4));     // 6
// console.log(addThemAll(1,2,3,4));   // 10
// console.log(addThemAll(5,5,10));   // 20



//  Task 2

// function multiply(a) {
// 	return function (b) {
// 		return a * b;
// 	}
// }
// console.log(multiply(5)(5))		// 25
// console.log(multiply(2)(-2)) 	// -4
// console.log(multiply(4)(3))		// 12


//  Task 3

// const movies = [
// 	{
// 	movieName: 'The Thing',
// 	releaseYear: 1982,
// 	directedBy: 'Carpenter',
// 	runningTimeInMinutes: 109,
// 	},
// 	{
// 		movieName: 'Aliens',
// 		releaseYear: 1986,
// 		directedBy: 'Cameron',
// 		runningTimeInMinutes: 137,
// 	},
// 	{
// 		movieName: 'Men in Black',
// 		releaseYear: 1997,
// 		directedBy: 'Sonnenfeld',
// 		runningTimeInMinutes: 98,
// 	},
// 	{
// 		movieName: 'Predator',
// 		releaseYear: 1987,
// 		directedBy: 'McTiernan',
// 		runningTimeInMinutes: 107,
// 	},
// ];

// function byProperty(property, direction) {

// };



// console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку



//  Task 4 

// function detonatorTimer(delay) {
// 	let result = delay;
// 	for (let i =delay; i >= 1; i--)
// 		result -= 1, console.log(i);
// 	return console.log(result);
// };
// setTimeout(detonatorTimer, 2000, 3)
console.log("Boom");

// detonatorTimer(3);
// 3
// 2
// 1
// BOOM!