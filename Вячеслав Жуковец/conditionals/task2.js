// 2. Пользователь вводит 3 числа, вывести на экран наибольшее из этих 3х чисел.

// let user1 = +prompt('Введите первое число =');
// let user2 = +prompt('Введите второе число =');
// let user3 = +prompt('Введите третье число =');

// if (user1>user2 && user1>user3) {
//     alert (`Наибольшее число user1 = ${user1}`);
// } else if (user2>user1 && user2>user3) {
//     alert (`Наибольшее число user2 = ${user2}`);
// } else if (user3>user1 && user3>user2) {
//     alert (`Наибольшее число user3 = ${user3}`);
// } else if (user1===user2 && user1===user3) {
//     alert ('Нет наибольшего числа');
// }



// 3. Пользователь вводит номер дня недели, вывести на экран название этого дня.

let dayOfTheWeek = +prompt('Введите день недели =');

switch (dayOfTheWeek) {
    case 1:
        alert ('Понедельник');
        break;
    case 2:
        alert ('Вторник');
        break;
    case 3:
        alert ('Среда');
        break;
    case 4:
        alert ('Четверг');
        break;
    case 5:
        alert ('Пятница');
        break;
    case 6:
        alert ('Суббота');
        break;
    case 7:
        alert ('Воскресенье');
        break;
    default:
        alert('В неделе 7 дней!');
        break;
}
