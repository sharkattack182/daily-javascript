// Check if one array can be nested in another
// function takes in two arrays as an argument 
// if arr1 min is greater than arr2 min and if arr1 max is less than arr2 max
// Solve Time: 10min

const canNest = function(arr1, arr2) {
    // console.log(arr1)
    // console.log(arr2)

    const arr1sorted = arr1.sort((a, b) => a - b);
    const arr2sorted = arr2.sort((a, b) => a - b);

    if(arr1sorted[0] < arr2sorted[0] && arr1sorted[arr1sorted.length -1] < arr2sorted[arr2sorted.length - 1]) {
        console.log("false");
        return false;
        
    }

    console.log("true")
    return true
}

canNest([1,2], [3,4]);
canNest([10, 12], [15, 8]);