/*
 Zadanie 1
*/
const hello1 = 'Hello';
const world = ' World'
console.log(`${hello1} ${world}`);

/*
Zadanie 2
 */
var multiply = (a, b = 1) => a*b;

/*
Zadnie 3
 */
let average = (...args) => args.reduce( (a,b) => a+b )/args.length ;

/*
Zadananie 4
 */

/*
Zadanie 5
 */
const data =  [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstaname, , lastname] = data;

/**
 * Dodatkowe
 */

/*
Zadanie 1
 */
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}

/*
Zadanie 2
 */
function shuffleIt(arr,...args){
    args.forEach(function (data) {
        arr[data[0]] = arr[data[1]]
        arr[data[1]] = arr[data[0]]
    });
    return arr;
}

/*
Zadanie 3
 */
var Sum = 'sum = function(arr){ return arr.reduce((a,b) => a+b); }';
