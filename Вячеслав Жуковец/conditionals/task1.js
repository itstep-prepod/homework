//1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let user1 = +prompt('Введите первое число =');
let user2 = +prompt('Введите второе число =');

if (user1>user2) {
    alert (`Наибольшее число = ${user1}`);
} else if (user1 < user2) {
    alert(`Наибольшее число = ${user2}`);
} else if (user1===user2) {
    alert('Нет наибольшего числа');
}

