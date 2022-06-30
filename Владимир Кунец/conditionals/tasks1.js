//1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let userNamberOne = +prompt('Введите первое число','');
let userNamberTwe = +prompt('Введите второе число','');

if (userNamberOne > userNamberTwe){
    console.log (userNamberOne);
} else if (userNamberOne < userNamberTwe) {
    console.log (userNamberTwe);
} else if (userNamberOne === userNamberTwe)
    {console.log('Равные числа');
} else {console.log('что-то новенькое');}