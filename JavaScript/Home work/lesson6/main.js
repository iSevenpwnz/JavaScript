// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// noinspection SpellCheckingInspection

// let a = 'hello world';
// console.log('Слово «hello world» занимает ' + a.length + ' кодовых значений');
//
// let b = 'lorem ipsum';
// console.log('Слово «hello world» занимает ' + b.length + ' кодовых значений');
//
// let x = 'javascript is cool';
// console.log('Слово «javascript is cool» занимает ' + x.length + ' кодовых значений');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.toUpperCase(),'lorem ipsum'.toUpperCase(),'javascript is cool'.toUpperCase())

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase(),'LOREM IPSUM'.toLowerCase(),'JAVASCRIPT IS COOL'.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//      let str = 'Каждый охотник желает знать';
//      let arr = stringToarray(str);
//      document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => { return str.split(' ');
// };
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
// console.log(arr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let deleteCharacters = (str, length) => {
//     return str.substring(0, length);
// };
// let str = 'Каждый охотник желает знать';
// document.write(deleteCharacters(str, 7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insertDash = (str) => {
//     return  str.split(' ').join('-').toUpperCase();
// };
//     let arr = "HTML JavaScript PHP";
// document.writeln(insertDash(arr)); //

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let arr = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(arr('hello okten'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let fUp = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(fUp('okten hi you are welcome'));

