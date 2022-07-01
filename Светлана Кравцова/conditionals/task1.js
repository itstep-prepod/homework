// Пользователь вводит два числа, вывести в консоль наибольшее из них.

let userNumber1 = +prompt('enter number 1');
let userNumber2 = +prompt('enter number 2');
if (userNumber1 > userNumber2) {
    console.log(userNumber1);
} else if (userNumber1 < userNumber2) {
    console.log(userNumber2);
} else if (userNumber1 === userNumber2) {
    console.log('числа равны');
} else console.log('ошибка')



