// 1. Пользователь вводит 3 числа, вывести на
// экран наибольшее из этих 3х чисел.

let fistNumber = +prompt('Введите первое число');
let twoNumber = +prompt('Введите второе число');
let threeNumber = +prompt('Введите третье число');

if (fistNumber > twoNumber && fistNumber > threeNumber) {
    alert('Число 1 больше');
} else if (twoNumber > fistNumber && twoNumber > threeNumber) {
    alert('Число 2 больше');
} else if (threeNumber > fistNumber && threeNumber > twoNumber) {
    alert('Число 3 больше');
} else if (fistNumber === twoNumber && twoNumber === threeNumber && fistNumber === threeNumber) {
    alert('Все числа одинаковые');
} else {
    alert('Числа введены некоректно. Повторите ввод.');
}


// 2. Пользователь вводит номер дня недели,
// вывести на экран название этого дня.

let weekDay = +prompt('Введите номер дня недели');

switch (weekDay) {
    case 1:
        alert('Это понедельник');
        break;
    case 2:
        alert('Это вторник');
        break; 
    case 3:
        alert('Это среда');
        break;
    case 4:
        alert('Это четверг');
        break;
    case 5:
        alert('Это пятница');
        break;
    case 6:
        alert('Это суббота');
        break; 
    case 7:
        alert('Это воскресенье');
        break;  
    default:
        alert('Пожалуйста, введите число от 1 до 7');
        break;
}
