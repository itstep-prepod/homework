// 2. Пользователь вводит 3 числа, вывести на экран наибольшее из этих 3х чисел.

let user1 = +prompt('Введите первое число =');
let user2 = +prompt('Введите второе число =');
let user3 = +prompt('Введите третье число =');

if (user1>user2 && user1>user3) {
    alert (`Наибольшее число user1 = ${user1}`);
} else if (user2>user1 && user2>user3) {
    alert (`Наибольшее число user2 = ${user2}`);
} else if (user3>user1 && user3>user2) {
    alert (`Наибольшее число user3 = ${user3}`);
} else if (user1===user2 && user1===user3) {
    alert ('Нет наибольшего числа');
}



// 3. Пользователь вводит номер дня недели, вывести на экран название этого дня.

let dayOfTheWeek = +prompt('Введите день недели =');

if (dayOfTheWeek === 1){
    alert ('Понедельник');
} else if (dayOfTheWeek === 2) {
    alert ('Вторник');
} else if (dayOfTheWeek === 3) {
    alert ('Среда');
} else if (dayOfTheWeek === 4) {
    alert ('Четверг');
} else if (dayOfTheWeek === 5) {
    alert ('Пятница');
} else if (dayOfTheWeek === 6) {
    alert ('Суббота');
} else if (dayOfTheWeek === 7) {
    alert ('Воскресенье');
} else if (dayOfTheWeek !== (1-7)){
    alert ('В неделе 7 дней!');
}
