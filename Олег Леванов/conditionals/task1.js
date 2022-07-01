// 1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let one = prompt('enter number one');
let two = prompt('enter number two');

let userNumberOne = Number(one);
let userNumberTwo = Number(two);

if (userNumberOne > userNumberTwo) {
    console.log(userNumberOne);
} else if (userNumberOne < userNumberTwo) {
    console.log(userNumberTwo);
} else if (userNumberOne === userNumberTwo) {
    console.log('Числа равны');
} else if (isNaN(userNumberOne) || isNaN(userNumberTwo)) {
    console.log('Для выполнения условия нужно два числа');
} else {
    console.log('Что то не так?');
}
