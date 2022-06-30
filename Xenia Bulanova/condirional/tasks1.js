// 1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let userAge1 = +prompt ('enter your age');
let userAge2 = +prompt ('enter your age');


// console.log(Math.max(userAge1,userAge2));


if ( userAge1 > userAge2) {
    console.log(userAge1);
} else if ( userAge1 === userAge2 ) {
    console.log(userAge1);
} else {
    console.log(userAge2);
}
