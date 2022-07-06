// 1. Пользователь вводит 3 числа, вывести на
// экран наибольшее из этих 3х чисел
let userNumber1 = +prompt ('Введи число, плз!!!');
let userNumber2 = +prompt ('Введи еще число, плз!!!');
let userNumber3 = +prompt ('И последнее число)');
if (userNumber1 > userNumber2 & userNumber1 > userNumber3) {
    console.log (userNumber1);
    alert (`Наибольшее ${userNumber1}`);
} else if (userNumber2 > userNumber1 & userNumber2 > userNumber3){
    console.log (userNumber2);
    alert (`Наибольшее ${userNumber2}`);
} else if (userNumber3 > userNumber1 & userNumber3 > userNumber2) {
    console.log(`Наибольшее ${userNumber3}`);
    alert(`Наибольшее ${userNumber3}`);
} else if (userNumber1 === userNumber2 & userNumber1 > userNumber3){
    console.log(`Наибольшее ${userNumber1}`);
    alert(`Наибольшее ${userNumber1}`);
} else if (userNumber2 === userNumber3 & userNumber2 > userNumber1){
    console.log(`Наибольшее ${userNumber2}`);
    alert(`Наибольшее ${userNumber2}`);
} else {
    console.log('Они равны');
    alert(`Они равны`);
} 
