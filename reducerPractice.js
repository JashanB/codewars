// const numbers = [1, 2, 3, 4, 5, 6];
// //sum
// //arr.reduce(callback(accumulator, currentValue), initialValue)

// let sum = numbers.reduce((ac, cv) => ac + cv);

// const numbers = [1800, 50, 300, 20, 100];

// let subtract = numbers.reduce((ac, cv) => ac - cv)

// const expenses = [1800, 2000, 3000, 5000, 500];
// const salary = 15000;

// let difference = expenses.reduce((ac, cv) => ac - cv, salary)

//duplicates

// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// // const returnAge = arr => {
// //     let obj = {};
// //     for (const age of ageGroup) {
// //         if (!obj[age]) { obj[age] = 0}
// //     }
// //     return Object.keys(obj);
// // }
// // console.log(returnAge(ageGroup))
// let uniqueAgeGroup = ageGroup.reduce(function (ac, cv) {
//     if (ac.indexOf(cv) === -1) {
//         ac.push(cv);
//     }
//     return ac;
// }, []);
// console.log(uniqueAgeGroup)


let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ];