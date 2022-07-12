// 1. Пользователь вводит два числа, вывести в консоль наибольшее из них.
let userNumber1 = +prompt ('Введи число!!!');
let userNumber2 = +prompt ('Введи еще число!!!');
if (userNumber1 > userNumber2) {
    console.log (userNumber1);
    alert (`Наибольшее ${userNumber1}`);
} else if (userNumber2 > userNumber1){
    console.log (userNumber2);
    alert (`Наибольшее ${userNumber2}`);
} else {
    console.log('Они равны');
    alert(`Они равны`);
}