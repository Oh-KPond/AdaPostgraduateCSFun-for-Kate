// Given two string, write a func to determine if the second string is an anagram of the first.

// Restate: Write a function that takes two strings and returns if the first string and the second string have the same characters.

// Inputs: Two strings that only have lowercase alphabets

// Output: A boolean

// Test Cases:
// validAnagram("salt", "slat") => true
// validAnagram("sister", "brother") => false 
// validAnagram("sotl", "stal") => false

function validAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return console.log(false);
    }
    
    let charMap1 = {}
    let charMap2 = {}

   str1.split('').forEach(char => {
    if (char in charMap1){
        charMap1[char] += 1
    } else {
        charMap1[char] = 1
    }
   });

   str2.split('').forEach(char => {
    if (char in charMap2){
        charMap2[char] += 1
    } else {
        charMap2[char] = 1
    }
   });

   for(let key in charMap1){
       if(!(key in charMap2)){
           return console.log(false)
       }
       if(charMap1[key] !== charMap2[key]){
           return console.log(false)
       }
   }

   return console.log(true)
}

// This 2nd loop trial does not account for if there is more then 0 of a char at the end of the loop
//    str2.split('').forEach(char => {
//     if (char in charMap){
//         if (charMap[char]<= 0){
//             return console.log(false)
//         }
//         else {
//             charMap[char] -= 1
//         }
//     }
//    })

validAnagram("salt", "slat")
validAnagram("sister", "brother")
validAnagram("sotl", "stal")