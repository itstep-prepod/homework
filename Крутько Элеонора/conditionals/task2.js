//1. Пользователь вводит 3 числа, вывести на
//экран наибольшее из этих 3х чисел

let numberOne = +prompt('Введите первое число');
let numberTwo = +prompt('Введите второе число');
let numberThree = +prompt('Введите третье число');

if (numberOne > numberTwo && numberOne > numberThree){
    alert(`Наибольшее число ${numberOne}`);
} else if (numberTwo > numberThree && numberTwo > numberOne ){
    alert(`Наибольшее число ${numberTwo}`);
} else if (numberThree > numberOne && numberThree > numberTwo){
    alert(`Наибольшее число ${numberThree}`);
} else if (numberOne === numberTwo && numberTwo === numberThree && numberThree === numberOne){
    alert('Введенные числа равны');
}


//2. Пользователь вводит номер дня недели,
//вывести на экран название этого дня.

let numberOfDay = +prompt('Введите номер дня недели от 1 до 7');
switch (numberOfDay){
    case 1:
        alert('Понедельник!');
        break;
    case 2:
        alert('Вторник!');
        break;
    case 3:
        alert('Среда!');
        break;
    case 4:
        alert('Четверг');
        break;
    case 5:
        alert('Пятница!');
        break;
    case 6:
        alert('Суббота!!!');
        break;
    case 7:
        alert('Воскресенье!!!');
        break;
    default:
        alert('Такого дня недели не существует, введите номер правильно');
};
