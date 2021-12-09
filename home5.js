//check for boolean number
// Boolean(prompt(number));{
//     while(number==9 && number == [0-9]){

//         return true;
//         break;
//     }
    
//         return false;
    
// }

//check for prime
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

//space before capital function

// function insertSpaces(string) {
//     string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
//     string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
//     return string;
    
// }
// debugger;
// let res = insertSpaces("BatemanIsDead");
// console.log(res);

// insert only true digits
let array =prompt([])

function trueNum(array) {
   
    let flag=true;
    for (let i = 0; i<= Infinity; i++) {
        if (num= (array.push(prompt(getElementById(i+1))))); {
            
            flag=true;
            
        }
        else ( i>0 );  {
            alert("sdfs")
            break 
        }
        
    }
}
debugger;
trueNum(array);

// program to check the number of occurrence of a character

// function compareString(str, str2) {
//     (prompt(str));
//     (prompt(str2));
// for (let i=0; i==len && i<=len; i++) {
// return res;
// }
// }
// debugger;
// compareString();

// function bblSort(arr){
     
//     for(let i = 0; i < arr.length; i++){
        
//       // Last i elements are already in place  
//       for(let j = 0; j < ( arr.length - i -1 ); j++){
          
//         // Checking if the item at present iteration 
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){
            
//           // If the condition is true then swap them
//           let temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j+1] = temp
//         }
//       }
//     }
//     // Print the sorted array
//     console.log(arr);
//    }
//    // This is our unsorted array
//    let arr = [234, 43, 55, 63,  5, 6, 235, 547]; 
//    // Now pass this array to the bblSort() function
//    bblSort(arr);


// Use insert() function to insert the number in textview.  
function insert(num)   
{  
documentdocument.form1.textview.value = document.form1.textview.value + num;  
}  
  
// Use equal() function to return the result based on passed values.  
function equal()  
{  
var exp = document.form1.textview.value;  
if(exp)  
{  
document.form1.textview.value = eval(exp)  
}  
}  
  
/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */  
function backspace()  
{  
var exp = document.form1.textview.value;  
document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  
  