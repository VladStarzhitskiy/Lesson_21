'use strict'


//////////1
function searchArrayWord(array, word){
    for(let i = 0; i < array.length; i++){
        if(array[i] == word){
            return true;
        }
        return false;
    }
}
let text = ['Кот', 'Собака', 'Жираф'];
console.log(searchArrayWord('Кот', text));


///////////2
let arr = [1, 2, 3, 7, 6, 9];
let sum = 0;
for (let a = 0; a < arr.length; a++);{
    sum += arr[a];
}
let result = sum / arr.length;
console.log(result);

/////////////5
let object = {
    'name' : 'Vlad',
    'phone' : 00000000,
    'adress' : 'Poltava',
    'total' : 830,
    'weight' : 2700,
    'product' : {
        'Чашка' : {
            'cost' : 100,
            'gram' : 200},
        'Ложка' : {
            'cost' : 30,
            'gram' : 100},
        'Чайник' : {
            'cost' : 550,
            'gram' : 2000},
        'Кружка' : {
            'cost' : 150,
            'gram' : 400}
        }
    }
}


