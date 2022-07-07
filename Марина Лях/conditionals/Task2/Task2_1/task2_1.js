// 1. Пользователь вводит 3 числа, вывести на экран наибольшее из этих 3х чисел

let userNumberOne = +prompt('введите первое число');
let userNumberTwo = +prompt('введите второе число');
let userNumberThree = +prompt('введите третье число');

if (userNumberOne > userNumberTwo && userNumberOne > userNumberThree) {
   console.log(userNumberOne);
   alert(`наибольшее число ${userNumberOne}`);
} else if (userNumberOne < userNumberTwo && userNumberTwo > userNumberThree) {
   console.log(userNumberTwo);
   alert(`наибольшее число ${userNumberTwo}`);
} else if (userNumberOne < userNumberThree && userNumberTwo < userNumberThree) {
    console.log(userNumberThree);
    alert(`наибольшее число ${userNumberThree}`);
} else if (userNumberOne === userNumberTwo && userNumberOne === userNumberThree) {
   console.log('Three numbers are equal');
   alert('Three numbers are equal');
} 
