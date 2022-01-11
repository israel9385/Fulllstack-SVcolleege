// document.getElementById('harel').value = '1';
let a
let b = 10
let level
let mat = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    b++
    a = '#a' + b
    level = Math.floor(Math.random() * 10)
    if (level > 4) {
      console.log(a)
      document.querySelector(a).value = mat[i][j]
    }
  }
}

let x = document.querySelector('#a84').value
console.log('is', x)
// document.querySelector('#harel').value = 'hi'
// let x = document.querySelector('#harel').value

// function q2(postTitle,bodyTitle){

//     let divTemp,titleTemp,bodyTemp,btnTemp;

//     for(let i = 0 ; i < postTitle.length; i++){
//         divTemp = document.createElement('div');
//         divTemp.setAttribute('class','post');
//         titleTemp = document.createElement('h1');
//         titleTemp.innerHTML = postTitle[i];
//         divTemp.appendChild(titleTemp);
//         bodyTemp = document.createElement('h5');
//         bodyTemp.innerHTML = bodyTitle[i];
//         divTemp.appendChild(bodyTemp);
//         btnTemp = document.createElement('button');
//         btnTemp.innerHTML = 'LIKE';
//         btnTemp.style.backgroundColor='lightblue';
//         divTemp.appendChild(btnTemp);
//         document.getElementById('main').appendChild(divTemp);
//     }
// }

// // debugger
// q2(['a','b','c'],['123','456','789']);
