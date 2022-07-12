//1. Пользователь вводит 3 числа, вывести на
//экран наибольшее из этих 3х чисел

let numberOne = +prompt( 'Введите первое число' );
let numberTwo = +prompt( 'Введите второе число' );
let numberThree = +prompt( 'Введите третье число' );

if (numberOne >= numberTwo && numberOne >= numberThree) {
    alert( `Наибольшее число ${numberOne}` );
} else if (numberTwo >= numberThree && numberTwo > numberOne ) {
    alert( `Наибольшее число ${numberTwo}` );
} else if (numberThree > numberOne && numberThree > numberTwo) {
    alert( `Наибольшее число ${numberThree}` );
};