// 1
// let aray = [[1,2,3],[4,5,6],[7,8],[7,8,5,4,3,3,4,6,9],[7],[7,8,9],[7,8,9]];
// כתוב תוכנית אשר מדפיסה את סכום הערכים של המטריצה
// function sumrize(aray) {
    
//     let sum = 0;
//     for(let row = 0; row < aray.length; row++){
//         for(let col = 0 ; col < aray[row].length; col++){
//             sum+=aray[row][col];
            
//         }
//     }
    
// }
// debugger;
// sum = sumrize(aray);

//2 
//   let array = [25,54,8846,2,846,86453,4,1,0];
// function compare(a, b) {
//     if (a < b ) {
//       return -1;
//     }
//     if (a > b ) {
//       return 1;
//     }
//     // otherwise a == b
//     return 0;
//   }
// let sorted = compare(array);

//3 
// Declare two array
// let array1 = ['a', 'b', 'c', 'd'];
// let array2 = ['k', 'x', 'z'];
 
// function findCommonElement(array1, array2) {
     
//     // Loop for array1
//     for(let i = 0; i < array1.length; i++) {
         
//         // Loop for array2
//         for(let j = 0; j < array2.length; j++) {
             
//             // Compare the element of each and
//             // every element from both of the
//             // arrays
//             if(array1[i] === array2[j]) {
             
//                 // Return if common element found
//                 return true;
//             }
//         }
//     }
     
//     // Return if no common element exist
//     return false;
// }
// let res = findCommonElement(array1, array2);

//4
let arrPrime = [[1,23,4,87], [7,243,42,875],[5,9,8,6,3,2,1,0] ] ;
function checkPrime([arr]) {
    if (arr <= 1) {
      return false;
    } else {
      for (let i = 2; i < arr; i++) {
        if (arr % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  debugger;
  let resPrime = checkPrime(arrPrime);