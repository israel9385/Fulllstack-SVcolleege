// // program to check if the string is palindrome or not

function checkPalindrome(number) {

    //length of a number
    let len = number.length;

    // first loop
    for (let i = 0; i < len / 2; i++) {

        // check if first and last number are same
        if (number[i] !== number[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
// take input
let number = 12321; //window.prompt('Enter a string: ');

// call the function
debugger;
let value = checkPalindrome(number);

console.log(value);



// check for email address
// function looksLikeMail(str) {
//     let lastAtPos = str.lastIndexOf('@');
//     let lastDotPos = str.lastIndexOf('.');
//     let flag= true;
//      if (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && str.indexOf('@.') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2){
//         return res = 'Valid Email';
//      }
//      else{
//          flag = false;
//          return res = 'Not A valid email';
//         }
        
// }
// debugger;
// looksLikeMail('israel019mobile@.co.il');
// console.log(res);

//  add char to str
function addChar(str, char) {
let 
}






















// 3
//*
//* *
//* 

// 4
// **
// *  *
// *  *
// **

// 8
// ****
// *      *
// *      *
// *      *
// *      *
// *      *
// *      *
// ****





// debugger
// q4(3)
// q4(4)
// q4(8)

// function q4(size){

//     // first line
//     let str = '';
//     for(let i = 0 ; i < size ; i++){
//         str+='*';
//     }
//     console.log(str);
    

//     for(let j = 0 ; j < size -2 ; j++){
//     // middle
//         str = '*'
//         for(let i = 0 ; i < size-2;i++){
//              str+= ' ';
//         }
//         str +='*'
//         console.log(str);
//     }
   
//     // last line
//     str = '';
//     for(let i = 0 ; i < size ; i++){
//         str+='*';
//     }
//     console.log(str);



// }


// 123

// 4

// q1(1234);

// function q1(num){

//     debugger;
//     let saveNumber = num;
//     let rev = 0;

//     while(num != 0){
//         rev *= 10; // rev = rev * 10;
//         rev += num % 10;
//         num = (num - num % 10) / 10;
//     }

//     if(rev == saveNumber){
//         return true;
//     }
//     else{
//         return false;
//     }
// }




// 31
// 12.12.1220
// 13.1.1221




function q3(num , date){

    // 12.12.2001
    let day = Number(date.slice(0,2));
    let m = Number(date.slice(3,5));
    let y = Number(date.slice(6));

    if(num + day <= 30){
        day = num + day;
        return day + '.' + m + '.' + y;
    }
    else{
        while( num + day < 30 ){
            if(m < 12){
                m++;
            }
            else{
                m = 1;
                y++;
            }
            num -= 30;
        }
        day = num + day;
        return day + '.' + m + '.' + y;
    }
    


}






