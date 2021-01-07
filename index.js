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

const drinks = [
    {name: "lemonade", price: 100},
    {name: "milk", price: 70},
    {name: "soda", price: 125}
]

function sortByPrice(drinks) {
    drinks.sort((drink1,drink2) => drink1.price - drink2.price);
    drinks.forEach((drink) => {
        console.log(drink.name, drink.price)
    })
}

sortByPrice(drinks)