const numbers = [3, 56, 2, 48, 5];
//
// //Map -Create a new array by doing something with each item in an array.
// function double(num) {
//     return num * 2;
// }
//
console.log(numbers.map( num => num * 2))
//
// //Filter - Create a new array by keeping the items that return true.
//
const newNum = numbers.filter( num => {
    return num > 10
});
console.log(newNum)
//
// //Reduce - Accumulate a value by doing something to each item in an array.
//
const reducedNum = numbers.reduce( (acc, num) => {
    return acc + num
});
console.log(reducedNum)
//
// //Find - find the first item that matches from an array.
console.log(numbers.find( num => num > 10
));
//
// //FindIndex - find the index of the first item that matches.
console.log(numbers.findIndex( num => {
    return num > 10
}));

// import emojipedia from "./emojipedia.js";
//
//
// const meanings = emojipedia.map(function (entry) {
//    return entry.meaning.substring(0,100)
// });
//
// console.log(meanings)

// function square(num) {
//     return num * num;
// }
//
// const numbers = [1, 2, 3, 5, 6];
//
// const newNumbers = numbers.map(num => num * num);
//
// console.log(newNumbers)