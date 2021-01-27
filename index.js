// Check if one array can be nested in another
// function takes in two arrays as an argument
// if arr1 min is greater than arr2 min and if arr1 max is less than arr2 max
// Solve Time: 10min
// Date: 1/5/2021

// const canNest = function(arr1, arr2) {
//     // console.log(arr1)
//     // console.log(arr2)

//     const arr1sorted = arr1.sort((a, b) => a - b);
//     const arr2sorted = arr2.sort((a, b) => a - b);

//     if(arr1sorted[0] < arr2sorted[0] && arr1sorted[arr1sorted.length -1] < arr2sorted[arr2sorted.length - 1]) {
//         console.log("false");
//         return false;

//     }

//     console.log("true")
//     return true
// }

// canNest([1,2], [3,4]);
// canNest([10, 12], [15, 8]);

// Find the smallest and biggest numbers
// function takes in an array of numbers and returns borth the min and max numbers in that order
// Solve Time: 10 min
// Date: 1/6/2021

// const minMax = (...nums) => {
//     console.log(nums);
//     const sorted = nums.sort((a,b) => a - b);
//     const resultArray = []
//     resultArray.push(sorted[0]);
//     resultArray.push(sorted[sorted.length - 1])
//     console.log(resultArray)

// }

// minMax(1,2,3,4,5)
// minMax(16, 8, 27, 45)

// Drink Sorting
// Function takes in an array of objects. Each object has two properties name and cost. the function will take in the array and sort the ddrinks by price in ascending order
// Solve Time: 5 min
// Date: 1/7/2021

// const drinks = [
//     {name: "lemonade", price: 100},
//     {name: "milk", price: 70},
//     {name: "soda", price: 125}
// ]

// function sortByPrice(drinks) {
//     drinks.sort((drink1,drink2) => drink1.price - drink2.price);
//     drinks.forEach((drink) => {
//         console.log(drink.name, drink.price)
//     })
// }

// sortByPrice(drinks)

// Tuck in Array
// Create a method in the person class whcih returns how another persons age compares.
// Solve Time: < 10 min
// Date: 1/8/2021

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.compareAge = function(person2) {
//     if(this.age > person2.age) {
//         console.log(this.name + " is older than " + person2.name)
//     }
//     else if(this.age < person2.age) {
//         console.log(this.name + " is younger than " + person2.name)
//     } else {
//         console.log(this.name + " is the same age as " + person2.name)
//     }
// }

// const matt = new Person("matt", 29);
// const brian = new Person("brian", 22);
// const dan = new Person("dan", 26);
// const pat = new Person("pat", 26)

// matt.compareAge(brian);
// brian.compareAge(matt)
// dan.compareAge(pat);

// Largest Swap
// Write a function that takes a two digit number and determines if its the largest of the to possible swaps
// Solve Time: 15 min
// Date: 1/11/2021

// function numberSwap(number) {
//     let numString = JSON.stringify(number);
//     if(isNaN(number) || numString.length > 2 || numString.length < 2 ) {
//         console.log("must be a two digit number");
//         return
//     } else {
//         var numArray = numString.split("");
//         var num1 = numArray[0];
//         var num2 = numArray[1];

//         if(num2 > num1) {
//             console.log("False");
//             return false
//         } else {
//             console.log("True")
//             return true
//         }
//     }
// }

// numberSwap("matt");
// numberSwap(45);
// numberSwap(97);
// numberSwap(134);
// numberSwap(1);

// Likes vs Dislikes
// YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.
// There are two other interesting rules to be noted about the interface:
// 1. Pressing a button, which is already active, will undo your press.
// 2. If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
// Create a function that takes an array of button inputs and returns the final state.
// Difficulty: Medium
// Date" 1/14/2021

// function likeOrDislike(array) {
//     let likeState;
//     let argumentsArray = []

//     var check = Array.isArray(array);
//     if(check == false) {
//         console.log("input must be an array");
//         return;
//     } else {
//         for (let i = 0; i < array.length; i++) {
//            if(array[i] == "Like" || array[i] == "Dislike") {
//                argumentsArray.push(array[i]);
//            }
//         }

//         for (let t = 0; t < argumentsArray.length; t++) {
//             if(argumentsArray[t] == "Like" && likeState !== "Like") {
//                 likeState = "Like"
//             } else if (argumentsArray[t] == "Dislike" && likeState !== "Dislike") {
//                 likeState = "Dislike"
//             } else {
//                 likeState = "Nothing"
//             }

//         }
//         console.log(likeState)
//     }
// }

// likeOrDislike(["Like", "Dislike", "SuperMan", "Like", "Hello"]);  //like
// likeOrDislike(["Like", "Dislike"]); //dislike
// likeOrDislike(["Like", "Like"]) //nothing
// likeOrDislike(["Like", "Like", "Dislike", "Dislike", "Like"]) //Like

// Adding Suffixes
// Write a function that returns n anonymous function which transforms its input by adding a particular suffix at the end
// Diffuclty: Medium
// Date: 1/5/2021
// Solve Time: 5 min

// function addSuffix(suffix) {
//     return function(word) {
//         console.log(word+suffix)
//     }
// }

// var add_ly = addSuffix("ly");

// add_ly("hopeless");
// add_ly("total");

// var add_less = addSuffix("less");

// add_less("fear");
// add_less("ruth");

// Array of multiples
// Create a function that takes two numbers as arguments(num, length) and returns an array o multiples of the num until the array length reaches length
//  Difficulty: Medium
// Date: 1/16/2021
// Solve Time: 6 min

// function arrayOfMultiples(num, length) {
//     const newArray = [];
//     for (let i = 0; i < length; i++) {
//         const index = i + 1;
//         let arrayItem = index * num;
//         newArray.push(arrayItem);
//     }

//     console.log(newArray)
// }

// arrayOfMultiples(7,5);
// arrayOfMultiples(12,10);
// arrayOfMultiples(17,6);

// Triangular Number Sequence
// Write a function that gives the number of dots with its correstponding triangle number of the sequence
// Date: 1/17/2021
// Difficulty: Medium
// Solves Time: 2 min

// function triangle(n) {
//     var number = n * (n + 1)/2;
//     console.log(number)
// };

// triangle(1);
// triangle(6);
// triangle(215);

// Make a Circle with OOP
// Create a circle constructor that create a circle with a radius rovided by an argument. The circles contructed must have two methods getArea and getPerimeter
// Date: 1/18/2021
// Difficulty: Medium
// Solves Time: 10 min

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//     const radiusSq = this.radius * this.radius;
//     console.log(Math.PI * radiusSq)
// };

// Circle.prototype.getPerimeter = function() {
//     console.log(this.radius * 2 * Math.PI)
// }

// let circle = new Circle(11);
// circle.getArea();

// let circle2 = new Circle(4.44)
// circle2.getPerimeter();

// A Redundant Function
// write a function that takes in a string and returns a function that returns the string
// Date: 1/20/2021
// Difficulty: Medium
// Solves Time: 10 min

// function redundant(string) {
//     return function() {
//         console.log(string)
//     }

// }

// const f1 = redundant("apple");
// const f2 = redundant("pear");
// const f3 = redundant("");

// f2();
// f3();
// f1();

// Simple Row Sum
// The challenge displays floyd's triangle and says to create a function that take a number and returns the sum of all numbers in that row
// Date: 1/21/2021
// Difficulty: Medium
// Solves Time: 25 min

// function rowSum(number) {
//     let n = number;
//     let numberCount = 1;
//     let mainArr = [];
//     let sum = 0;

//     for (let i = 1; i <= n; i++){
//         let rowArr = []
//         for(let j = 1; j <=i; j++) {
//             rowArr.push(numberCount)
//             numberCount++
//         }
//         mainArr.push(rowArr)
//     }

//     let numberArr = mainArr[number -1]

//     for(let a = 0; a <numberArr.length; a++) {
//         sum += numberArr[a]
//     }
//     console.log(sum)
// }

// rowSum(1);
// rowSum(2);
// rowSum(4);

// Three Arrays
// Given three arras of imtegers, return the sum of the integers which ar common in all three arrays
// Date: 1/22/2021
// Difficulty: Medium
// Solves Time: 25min

// function sumCommon(arr1, arr2, arr3) {
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     newArr.push(arr2[i]);
//   }
//   for (let i = 0; i < arr3.length; i++) {
//     newArr.push(arr3[i]);
//   }

//   function count_doubles() {
//     let count = {};
//     let result = [];

//     newArr.forEach(item => {
//         if(count[item]) {
//             count[item] +=1;
//             return
//         }
//         count[item] = 1
//     })

//     for(let prop in count) {
//         if(count[prop] >= 2) {
//             result.push(prop)
//         }
//     }

//     let sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         sum += parseInt(result[i]);

//     }
//     console.log(sum)
//     return sum
//   }

//   count_doubles()
// }

// sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]);
// sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]);

// Conenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Date: 1/23/2021
// Difficulty: Medium
// Solves Time: 5 min

// function changeEnough([q,d,n,p], amt) {
//     const quarters = q * .25;
//     const dimes = d * .10;
//     const nickels = n * .05;
//     const pennies = p * .01;
    
//     let sum = quarters + dimes + nickels + pennies;
    
//     if(sum >= amt) {
//         console.log("true");
//         return true;
//     } else {
//         console.log("false");
//         return false;
//     }

// }

// changeEnough([2, 100, 0, 0], 14.11);
// changeEnough([0, 0, 20, 5], 0.75);
// changeEnough([30, 40, 20, 5], 12.55);
// changeEnough([10, 0, 0, 50], 3.85);
// changeEnough([1, 0, 5, 219], 19.99)


// Find the nth Tetreahedral Number
// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron. Create a function that takes an integer n and returns the nth tetrahedral number.
// Date: 1/24/2021
// Difficulty: Medium
// Solves Time: 4 min


// function tetra(n) {
    
// var tet = (n * (n + 1) * (n +2)) / 6;
// console.log(tet);
// return tet
// }

// tetra(2);
// tetra(5);
// tetra(6);


// Find the Second largest number
// Create a function that takes in an array of numbers and returns the second largest number
// Date: 1/25/2021
// Difficulty: Medium
// Solves Time: 6 min

// function secondLargest(array) {
//     console.log(array);
//     array.sort(function(a,b) {
//         return a - b;
//     });
//     console.log(array[array.length - 2]);
// }


// secondLargest([10, 40, 30, 20, 50]);
// secondLargest([25, 143, 89, 13, 105]);
// secondLargest([54, 23, 11, 17, 10]);


// Hitting the JAckpot
// Create a function that takes in an array and returns true if all the elements are the same and false otherwise. The array will contain 4 items. 
// Date: 1/25/2021
// Difficulty: Medium
// Solves Time: 11 min

// function testJackpot(array) {
//     var set = array[0]
//     if (array.length > 4 || array.length < 4) {
//         console.log("need four values");
//     } 
    
//     if (set !== array[1] || set !== array[2] || set !== array[3] || set !== array[1]) {
//         console.log(false);
//     } else {
//     console.log(true);
//     }
// }

// testJackpot(["@", "@", "@", "@"]);
// testJackpot(["abc", "abc", "abc", "abc"]);
// testJackpot(["SS", "SS", "SS", "SS"]);
// testJackpot(["&&", "&", "&&&", "&&&&"]);
// testJackpot(["SS", "SS", "SS", "Ss"])


// Reverse the number
// Create a function that takes in an integer and reverses it 
// Date: 1/25/2021
// Difficulty: Medium
// Solves Time: 17 min

// function rev(string) {
//     var str = string.toString();
//     var arr = str.split("");
    
//     if(arr[0] == "-") {
//         arr.shift();
//     }

//     var reOrder = []
//     for (let i = arr.length + 2; i >= 0; i--) {
//         reOrder.push(arr[i])
//     }
//     console.log(reOrder.join(""))
// }

// rev(5121);
// rev(69);
// rev(-122157);


// Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
// Date: 1/26/2021
// Difficulty: Medium
// Solves Time: 