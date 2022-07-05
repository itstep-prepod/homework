// 1. Пользователь вводит 3 числа, вывести на
// экран наибольшее из этих 3х чисел
let inputUserOne = prompt('enter number one');
let inputUserTwo = prompt('enter number two');
let inputUserThree = prompt('enter number three');

let userNumberOne = Number(inputUserOne);
let userNumberTwo = Number(inputUserTwo);
let userNumberThree = Number(inputUserThree);

if (isNaN(userNumberOne) || isNaN(userNumberTwo) || isNaN(userNumberThree)) {
    console.log('Для выполнения условия нужны числа!\nОшибка условия!');
} else if (userNumberOne < userNumberTwo && userNumberTwo < userNumberThree) {
    console.log(`Введеное число третьим наибольшое и равно ${userNumberThree}`);
} else if (userNumberOne > userNumberTwo && userNumberTwo > userNumberThree) {
    console.log(`Введеное число первым наибольшое и равно ${userNumberOne}`);
} else if (userNumberOne < userNumberTwo && userNumberTwo > userNumberThree) {
    console.log(`Введеное число вторым наибольшое и равно ${userNumberTwo}`);
} else if (userNumberOne === userNumberTwo && userNumberTwo === userNumberThree) {
    console.log(`Введеные числа равны и наибольшим будет ${userNumberOne}`);
} else if (userNumberOne === userNumberTwo
    || userNumberOne === userNumberThree
    || userNumberTwo === userNumberThree
) {

    let max = userNumberOne;
    if (max < userNumberTwo) {
        max = userNumberTwo;
    } else if (max < userNumberThree) {
        max = userNumberThree;
    } else {
        max = userNumberOne;
    }

    console.log(`Наибольшое число будет ${max} из первых введеных пользователем.`);
} else {
    console.log('?Что то не так?');
}


// 2. Пользователь вводит номер дня недели,
// вывести на экран название этого дня.
let inputNumberWeek = prompt('enter number week');
let numberWeek = Number(inputNumberWeek);

if (isNaN(numberWeek)) {
    console.log('Для выполнения условия нужен ввод числа дня недели!\nОшибка условия!');
} else {
    switch (numberWeek) {
        case 1:
            console.log('Понедельник.');
            break;
        case 2:
            console.log('Вторник.');
            break;

        case 3:
            console.log('Среда.');
            break;

        case 4:
            console.log('Четверг.');
            break;

        case 5:
            console.log('Пятница.');
            break;

        case 6:
            console.log('Суббота.');
            break;

        case 7:
            console.log('Воскресенье.');
            break;

        default:
            console.log('Нет токой цифры для дня недели\nМожет быть от (1 - 7)');
        //break;
    }
}
