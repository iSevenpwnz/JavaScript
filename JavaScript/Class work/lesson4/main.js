// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numsMin(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1)
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//     } else {
//         console.log(num3)
//     }
// }
//  numsMin(80,50,60 )

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numsMax(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     }
//         else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else {
//         console.log(num3)
//     }
// }
// numsMax(40,20,41)

// - створити функцію яка повертає найбільше число з масиву

// debugger;
// let nums = [ 99, 17, 13, 6, 22, 31, 45, 66, 100, 111];
// function maxArray(numbers) {
//     let max = numbers[0]
//         for (const number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max
// }
// document.write(`<h2>${maxArray(nums)}</h2>`)

// - створити функцію яка повертає найменьше число з масиву

// let nums = [ 99, 17, 13, 6, 22, 31, 45, 66, 100, 1];
// function minArray(minNumber) {
//     let min = minNumber[0]
//     for (let element of minNumber) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h2>${minArray(nums)}</h2>`)

// створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13
// let nums = [ 99, 17, 13, 6, 22, 31, 45, 66, 100, 1]
// function res(arr) {
//     let result = 0;
//     for (let number of arr) {
//         result = result + number;
//     }
//     return result
// }
//  document.write(`<h2>${res(nums)}</h2>`)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nums = [ 99, 17, 13, 6, 22, 31, 45, 66, 100, 1]
//
// function serArifm(arr) {
//     let ser = 0;
//     for (let element of arr) {
//         ser = ser + element
//     }
//     return ser / arr.length;
// }
// document.write(serArifm(nums))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);
// function minMax(arr) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min;
//
// }
// document.write(minMax(47, 210, 183, 6, 49))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.

// function random (length) {
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.floor(Math.random()*100));
//     }
//     return arr;
// }
//
//
// document.write(random(5))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

// function random(length,limit) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * limit));
//     }
//     return arr;
// }
// document.write(random(13,130));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
