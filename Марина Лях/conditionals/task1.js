// 1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let userNumberOne = +prompt('введите первое число');
let userNumberTwo = +prompt('введите второе число');

if (userNumberOne > userNumberTwo){
   console.log(userNumberOne);
} else if (userNumberOne < userNumberTwo) {
   console.log(userNumberTwo);
} else if (userNumberTwo===userNumberOne) {
   console.log('они равны');
}