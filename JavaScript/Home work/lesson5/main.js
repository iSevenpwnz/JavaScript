// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let reck =(a,b)=>a * b;
// console.log(reck(7,9))
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let round = (Pi, r) => Pi * Math.pow(r, 2);
// console.log(round(3.14, 3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cylinder = (Pi, r, h) => 2 * Pi * r * (h + r);
// console.log(cylinder(3.14, 2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// let func = (a) => {
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i]);
//     }
// };
// func(nums);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let write = (text) => {document.write(`<p> ${text} </p>`)};
// write('text here')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let label = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li> ${text}</li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`</ul>`)
// }
//         label('text here');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let label2 = (text, size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// };
// label2(`text here`, 20)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let nums = [2, 'text', true, 6,false, 31, 'okten', 66, 100, true]
//
// let elem = (arr) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${nums[i]}</li>`);
//     }
//     document.write(`</ul>`)
// };
// elem(nums);

// - створити функцію яка приймає масив об'єктів
// з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let simpsons = [{
//     id: 'Bart',
//     surname: 'Simpson',
//     age: 10,
// },
//     {
//         id: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//     },
//     {
//         id: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//     },
//     {
//         id: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//     },
//     {
//         id: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//     }];
//
// let object = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
//         document.write(`<div>  ${el.id} -  ${el.surname} - ${el.age} age </div>`);
//     }
// };
// object(simpsons)































