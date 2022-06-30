// 1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let userNumberOne = +prompt ('Введите первое число для сравнения со вторым');
let userNumberTwo = +prompt ('Введите второе число');
if (userNumberOne<userNumberTwo){ 
    console.log(userNumberTwo) 
} else if (userNumberOne>userNumberTwo){
    console.log(userNumberOne)
} else {
    console.log('они равны')
}