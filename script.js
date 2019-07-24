'use strict';



//спецсимволы
alert('Привет\nМир!')

console.log('\tПривет\nМир!\u003E');

//Экранирование спецсимволов

console.log('\tПрив\'ет\nМи\\р!\u003E');

//Методы и свойства
//1) доступ к символам

let text = 'Привет Мир';

console.log(text.charAt(0) ); //П
console.log(text[0] ); //П

text = text[0] + text[4] + text[7]; //ПеМ

//toLowerCase() делает символи в маленьком регистре
let rnt = '';
for(let i = 0; i< text.length; i++){
    if(i == 2){
        rnt += text[i].toLowerCase();
    }else{
        rnt += text[i];
    }
}
text = rnt;
console.log(text);


//поиск подстроки
let str = 'Apple Iphone';
console.log( str.indexOf('Iphone') ); //6
console.log( str.indexOf('iphone') ); //-1

console.log( str.indexOf('Iph', 9) ); //-1
//lastIndexOf - Ищет с конца строки

                                                        //str lends(length) - длинна строки

//Взятия подстроки
//substring(start, end*)

console.log( str.substring(8) );
console.log( str.substring(8, 10) );//не включая 10-й символ

//substr(start, symbol_num)
console.log( str.substr(8, 4) );

//slice(start, end*)

console.log( str.slice(8, 10) );

console.log( str.substring(-2, 10) );//преобразует -2 в 0
console.log( str.substring(4, -1) ); // start стал end и наоборот


//В slice отрицательное значение отсчитывается от конца строки

console.log( str.slice(-2) );
console.log( str.slice(1, -1) );

console.log( String.fromCharCode(1072) ); //a


console.log( 'яблоко' .charCodeAt(0) ); //1103 -код буквы я с таблицы юникода


//Объекты
let obj = new Object(); //Пустой объект
let obj2 = {}; //второй вариант записи используется чаще.


let person = {};
person.neme = 'Иван';

console.log( person.name ); //Иван
person.age = 20;
console.log( person.name + '' + person.age );
delete person.age;//чтоб удалить объект

if('name' in person){
    console.log( 'name есть' );
}

if(person.age == undefined){
    console.log( 'name есть' );
}

person = {
    'name' : 'Иван',
    'age' : 35,
    'last name' : 'Иванов',
    'favorit music' : 'rock'
};
console.log( person['last name'] );
let fm = 'favorit music';

console.log( person[fm] ); //rock


let user = {
    'name' : 'Анна',
    'height' : 180,
    'size' : {
        'top' : 90,
        'middle' : 60,
        'bottom' : 90
    },
    'weight': 70
};
console.log( user.size.middle ); //60
console.log( user['size']['middle'] ); //60

//Перебор свойств объекта

for(let key in user){
    console.log( 'Ключ: ' + key + 'значение: ' + user[key] );

    if(typeof(user[key]) == 'object'){
        for(let key2 in user[key]){
            console.log( 'Ключ: ' + key2 + 'значение: ' + user[key][key2] );
        }
    }
}

//В каком порядке перебираются свойства

/*
'7'
'38'
'1'
*/

let admin = user;
console.log( admin.name ); //Анна
admin.name = 'Петр';
console.log( user.name ); // Петр


//Масивы с числовыми индексами

let mass = [];

mass = ['Яблоко', 'Груша', 'Апельсин'];
//отсчет элементов начинается с 0

console.log( mass[1] ); //Груша
mass[2] = 'Банан';

console.log( mass.length ); //3

console.log( mass ); 

let mass2 = [1, 'текст', {'name': 'Василий'}, true]; //в массиве можит храница любое количесто объектов и они могут быть разные как в примере

//Метод pop - удаляет последний элемент из массива
mass.pop(); // Удаляет банан

//Метод push - добавляет элемент в конец масива
mass.push('Апельсин');

//Метод shift - удаляет из начала массива
mass.shift();

//Метод unshift - Добавляет в начало массива
mass.unshift('Киви');
mass.unshift('Слива', 'Малина');
                                //push i pop Выполняются очень быстро а шифт и аншифт очень медленно

let a = [];
a[0] = 'текст';
a[6] = 'текст';
//текст, , , , , текст

for(let i = 0; i < mass.length; i++){
    console.log( mass[i] );
}

mass.lenght = 2; // с помощью lenght можно обрезать масив

let mass3 = new Array('Яблоко', 'Груша');

let mass4 = new Array(2); //создает две пустые ячейки


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
matrix[0][0]; //1
matrix[1][1]; //5































