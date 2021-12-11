// 1. check for boolean number
// let number = document.getElementById("input").value;
// flag = true;

// function Boolean(number); {

//     if (number == 9 && number == [0 - 9]); {
//         console.log("Super");
//     } else {
//         flag = false;
//         console.log("try again");
//     }
// }

// 2. check for prime
// function isPrime(num) {
//     let sqrtnum=Math.floor(Math.sqrt(num));
//       let prime = num != 1;
//       for(let i=2; i<sqrtnum+1; i++) { // sqrtnum+1
//           if(num % i == 0) {
//               prime = false;
//               break;
//           }
//       }
//       return prime;
//   }
//   debugger;
// isPrime(19);

// 3. space before capital function

// function insertSpaces(string) {
//     string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
//     string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
//     return string;

// }
// debugger;
// let res = insertSpaces("BatemanIsDead");
// console.log(res);

// 4.insert only true digits
// let number = document.getElementById("input").value;


// function trueNum(number) {
//     for (number; number == 0 || number > 0; number++); {
//         console.log(number + "is Positibe");

//     } else {
//         console.log(number + "is negative");
//     }

// }
// trueNum(value);

// 4. program to check the number of occurrence of a character

// function compareString() {
//     let str2 = 'This is a string',
//         searchFor = 'is',
//         count = 0,
//         pos = string.indexOf(searchFor);

//     while (pos > -1) {
//         ++count;
//         pos = string.indexOf(searchFor, ++pos);
//     }

//     console.log(count); 

//BONUS
// function sorting(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         // Last i elements are in place  
//         for (let j = 0; j < (arr.length - i - 1); j++) {

//             // Checking if the item at present iteration 
//             // is greater than the next iteration
//             if (arr[j] > arr[j + 1]) {

//                 // If the condition is true then swap them
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     // Print the sorted array
//     console.log(arr);
// }
// // This is our unsorted array
// let arr = [234, 43, 55, 63, 5, 6, 235, 547];
// // Now pass this array to the function
// sorting(arr);

// 7. Value input variable
// const inputField = document.getElementById('input');

// // Insert number on input fied
// const insertNum = num => inputField.textContent += num;

// // Do operation using eval()
// const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// // erase
// const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// // Clear all input
// const clearInput = () => inputField.textContent = '';



// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}