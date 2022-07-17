// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число

let userNumber = +prompt ('Введи положительное число');
let sum = 0;
if (userNumber <= 0) {
    userNumber = +prompt ('Введи положительное число');
} else if (isNaN (userNumber) === true) {
    userNumber = +prompt ('Введи положительное число');
} else {
    for (let i = 0; i <= userNumber; i++) {
        sum += i;
    }
    console.log (sum);
}