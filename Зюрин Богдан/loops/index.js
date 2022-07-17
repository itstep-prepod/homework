// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число

// let userNumber = +prompt ('Введи положительное число');
// let sum = 0;
// if (userNumber <= 0) {
//     userNumber = +prompt ('Введи положительное число');
// } else if (isNaN (userNumber) === true) {
//     userNumber = +prompt ('Введи положительное число');
// } else {
//     for (let i = 0; i <= userNumber; i++) {
//         sum += i;
//     }
//     console.log (sum);
// }

// 3. написать программу воторая определяет количество 
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

let userAmountOfNumbers = +prompt ('Скольско чисел вы хотите ввести?');
let userNumber = 0;
let positive = 0;
let negative = 0;
let zero = 0;
for (let i = 0; i < userAmountOfNumbers; i++) {

    userNumber = +prompt ('введите число');

    if (userNumber > 0) {
        positive += 1;
    } else if (userNumber < 0) {
        negative += 1;
    } else {
        zero += 1;
    }
    
}
console.log (`положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}`);