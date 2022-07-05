//1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let numberOne = +prompt('Введите первое число');
let numberTwo = +prompt('Введите второе число');
if (numberOne > numberTwo){
    console.log(`Число ${numberOne} больше`);
} else if(numberTwo > numberOne){
    console.log(`Число ${numberTwo} больше`);
} else {
    console.log(numberTwo);
};

