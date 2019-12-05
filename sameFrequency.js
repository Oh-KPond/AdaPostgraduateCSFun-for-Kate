// Implement a function that when given two positive integers it finds out if the two numbers have the same frequency of digits

// Restate: Make a function that will take two positive numbers and return true if the numbers have the same numbers in them and false if the numbers are made up of other numbers.

// Input: Positive integers only

// Output: True or False

// Test Cases:
// 182, 218 => true
// 34, 14 => false
// 9998, 8999 => true
// 0, 000 => false
//3589578, 5879385 => true

function sameFrequency(num1, num2){
    if(num1.length != num2.length) {
        return console.log(false)
    }

    let charmap1 = {}
    let charmap2 = {}

    num1.toString(10).split("").forEach(num => {
        if(num in charmap1){
            charmap1[num] ++
        }
        else {
            charmap1[num] = 1
        }
    });

    num2.toString(10).split("").forEach (num => {
        if(num in charmap2){
            charmap2[num] ++
        }
        else {
            charmap2[num] = 1
        }
    });

    for(let key in charmap1) {
        if(!(key in charmap2)) {
            return console.log(false)
        }
        if(charmap1[key] != charmap2[key]){
            return console.log(false)
        }
    }
    
    return console.log(true)
}

sameFrequency(182, 218)
sameFrequency(34, 14)
sameFrequency(9998, 8999)
sameFrequency(0, 000) 
// There's a bug here to deal with. I believe that it has to do with the toString function.
sameFrequency(3589578, 5879385)

