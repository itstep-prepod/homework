// 1. Пользователь вводит два числа, вывести в консоль наибольшее из них.


let input1 = prompt("Введите число");
let input2 = prompt("Введите число");

// console.log(Math.max(input1,input2));

if(+input1 > +input2){
    console.log(input1);
}else if(+input1 === +input2){
    console.log('Числа равны');
}else{
     console.log(input2);
}