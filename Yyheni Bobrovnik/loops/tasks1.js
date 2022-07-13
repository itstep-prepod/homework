/*

1. пользователь вводит число n 
написать цикл который выводит все числа от n до 0
(n может быть отрицательным)

let numberN = +prompt('Введите число');

if (numberN > 0)  {
    for ( ; numberN >= 0 ; numberN--) {
        console.log(numberN);
    }
} else if (numberN < 0)  {
    for ( ; numberN <= 0 ; numberN++) {
        console.log(numberN);
    }
} else if (numberN === 0) {
    console.log(0);
}


2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
(n всегда положительное) + проверить число n на число

let numberN = +prompt ('Введите положительное число');

let summa = 0;

if (isNaN(numberN) || numberN <= 0) {
    alert('Введите корректное число');
} else if (numberN > 0) {
    for (let count = 1; count <= numberN; count++) {
        summa = summa + count;
    }
    console.log(summa);
}

 
3. написать программу которая определяет количество 
положительных, отрицательных и нулей
в начале программы пользователь воодит количество чисел которое
намерен вводить
пример вывода в консоли
положительных: 2
отрицательных: 4
нулей: 1

let numbersCount = +prompt ('Сколько чисел вы намерены ввести?');
let numbers;
let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;
 
for ( ; numbersCount > 0; numbersCount--) {
    numbers = +prompt ('Введите число');
    if (numbers > 0){
        positiveNumber++;
    } else if (numbers < 0){
        negativeNumber++;
    } else if (numbers === 0){
        zero++;
    }
}
console.log (`Положительных: ${positiveNumber}`);
console.log (`Отрицательных: ${negativeNumber}`);
console.log (`Нулей: ${zero}`);


4. написать программу которая выводит среднее арифметическое 
n чисел введенных пользователем. Ввод чисел прекращается когда
нажали "отмена", после чего выводится среднее арифметическое

let countMean = 0;

for (let count = 0; ; count++) {
    let enterCountNumbers = prompt ('Введите числа. Для прекращения ввода, нажмите "Отмена"');
    countMean = countMean + +enterCountNumbers;
    if (enterCountNumbers === null) {
        countMean = countMean / count;
        console.log(countMean);
        break;
    } else if (isNaN(enterCountNumbers)) {
        alert('Вы ввели не число. Математическая операция невозможна. Начните сначала!');
        break;
    }
}
 

5. пользователь вводит числа n и m, вывести в консоль
квадраты всех чисел от n до m
 
*/

let firstNumber = +prompt ('Введите первое число');
let secondNumber = +prompt ('Введите второе число');

let square = 0;

for ( ; firstNumber <= secondNumber; firstNumber++) {
        square = Math.pow(firstNumber, 2);
        console.log (square);
}