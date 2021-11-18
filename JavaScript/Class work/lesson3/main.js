// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

// i = 0;
// while (i < nums.length) {
//     console.log(nums[i]);
//     i++;
// }
// 2. перебрати його циклом for
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while (i < nums.length) {
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < nums.length; i++)
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//
//     }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while (i < nums.length){
//     if (i % 2 === 0){
//         console.log(nums[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < nums.length; i++)
//     if (i % 2 === 0) {
//         console.log(nums[i]);
//     }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < nums.length; i++)
//     if (nums[i] % 3 === 0) {
//         nums[i] = 'okten'
//         console.log(nums[i]);
//     }

// 8. вивести масив в зворотньому порядку.

// for (let i = nums.length-1; i >= 0; i--) {
//     console.log(nums[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1.1 перебрати його циклом while
// let i = nums.length;
// while ( i > 0) {
//     i--
//     console.log(nums[i]);
// }


// // 2.2 перебрати його циклом for
// for (let i = nums.length-1; i >= 0; i--) {
//     console.log(nums[i]);
// }

// 3.3 перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = nums.length -1;
// while (i > 0) {
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//     }
//     i--;
// }

// 4.4 перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = nums.length-1; i >=0 ; i--)
//     if (i % 2 !== 0) {
//         console.log(nums[i]);
//
//     }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//  i = nums.length - 1;
// while(i>=0) {
//     if (i % 2 === 0) {
//         console.log(nums[i])
//     }
//     i--
// }

// 6.6 перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = nums.length-1; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(nums[i]);
//     }
// }

// 7.7 замінити кожне число кратне 3 на слово "okten"
// for (let i = nums.length-1; i>=0 ; i--)
//     if (nums[i] % 3 === 0) {
//         nums[i] = 'okten'
//         console.log(nums[i]);
//     }