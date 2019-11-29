// Implement a function which accepts a sorted array, and counts the unique values in the array.

// Restate: Create a function that takes a sorted array and returns the number of unique values that are in the array.

// Input: Can be negative numbers in the array. Always sorted.

// Output: An int of how many unique numbers there are in the array

// Test Cases:
// countUniqueValues([1,1,1,1,2]) => 2
// countUniqueValues([1,2,3,4,5,12,12,13]) => 7
// countUniqueValues([])

function countUniqueValues(arr) {
if(arr.length == 0){
    return console.log(0)
}
let pointer1 = 0
let pointer2 = 1

for(pointer2; pointer2 < arr.length; pointer2++){
    if (arr[pointer2] != arr[pointer1]){
        pointer1++
        arr[pointer1] = arr[pointer2]  
    }
}

return console.log(pointer1 + 1)
}

countUniqueValues([1,1,1,1,2])
countUniqueValues([1,2,3,4,5,12,12,13])
countUniqueValues([])