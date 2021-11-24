// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function Rect(a, b) {
// return a*b
// }
// let result = Rect(4,6)
// document.write(result)
// або
// document.write(Rect(4,6))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function round(Pi, r) {
//     return Pi * Math.pow(r,2)
// }
// let result = round(3.14,4)
// document.write(result)
// або
// document.write(round(3.14,4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(Pi, r, h) {
//     return 2 * Pi * r * (h + r);
// }
// let result = cylinder(3.14,3,5)
// document.write(result)
// або
// document.write(cylinder(3.14,3,5))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//
// function func() {
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i]);
//     }
// }
// func()

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function write(text) {
//     document.write(`<p> ${text} </p>`)
// }
// write('pishi che hoch');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function label(text) {
//     document.write(`<ul>`)
//     document.write(`<li> ${text}</li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`</ul>`)
// }
//         label('text tyt')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function label(text, size) {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//     document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//         label('text tyt', 7)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let nums = [2, 'text', true, 6,false, 31, 'okten', 66, 100, true]
//
// function elem(arr) {
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${nums[i]}</li>`);
//     }
//     document.write(`<ol>`)
//     }
// elem(nums)

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
//     function object(arr){
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<div>${arr[i].id}.${arr[i].surname} ${arr[i].age}</div>`);
//         }
//     }
// object(simpsons)