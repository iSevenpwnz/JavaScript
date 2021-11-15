// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let a = [1, 2, 3, 4, 5];
// let b = ['1', '2', '3', '4', '5'];
// let c = ['11', '22', '33', '44', '55', 111, 222, 333, 444, 555, true, false, false, true, true];
// console.log(a)
// console.log(b)
// console.log(c)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let a = [];
// a[0] = 'privet';
// a[1] = 'poka';
// a[2] = 'kak dela?';
// a[3] = ' ne rodila';
// console.log(a[3])

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Hey </div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let a = [`poka`];
// for (let i = 0; i<10; i++){
//     document.write(`<div> Hey ${a[0]} </div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0
// while ( i < 20){
//     i++;
//     document.write(`<h4>Privet</h4>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while ( i < 20){
//     i++;
//     document.write(`<h4>Privet ${`Poka`}</h4>`)
// }







// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let a = [1,2,3,4,5,6,7,8,9,10]
// for (let a=1; a<=10;a++){
//     console.log(a)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let a = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
// for (let i=0; i<a.length ; i++) {
//     console.log(a[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let a = ['q', 1, 'e', 2, true, 'y', false, 'j', 7, true];
// console.log(a)

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let a = [1,2,3,4,5,6,7,8,9,10,'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',true,false,true,false,true,false,true,false,true,false]
// for (i = 0; i < a.length; i++)
// if (typeof a[i] === "boolean") {
//     console.log(a[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let a = [1,2,3,4,5,6,7,8,9,10,'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',true,false,true,false,true,false,true,false,true,false]
// for (i=0; i<a.length; i++)
//     if (typeof a[i] === "number")
//         console.log(a[i])

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let a = [1,2,3,4,5,6,7,8,9,10,'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',true,false,true,false,true,false,true,false,true,false]
// for (i = 0; i < a.length; i++)
//     if (typeof a[i] === "string") {
//         console.log(a[i])
//     }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let a = [];
// a[0] = 'priver';
// a[1] = 1;
// a[2] = true;
// a[3] = 'kak dela?';
// a[4] = 2;
// a[5] = false;
// a[6] = 'ne';
// a[7] = 3;
// a[8] = true;
// a[9] = 'rodila';
//
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(i)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log(i)
//     document.write(i)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++)
//     if (i % 2 === 0) {
//         console.log(i)
//         document.write(i)
//     }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++)
//     if (i % 2 === 1) {
//         console.log(i)
//         document.write(i)
//     }
