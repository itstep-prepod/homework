// 1. Переписать из if в тернарный оператор «?

let age = 12;
let message = age < 6 ? alert('Привет, малыш') : age < 16 ? alert('Привет, парень') : alert('Здравствуйте');


// 2. Измените эту программу так, чтобы выводилось окно с 
// вопросом «Сколько вам лет?». Пользователь должен ввести 
// свой возраст, после чего получить сообщение с
// соответствующим приветствием. 

let ageUser = +prompt('Сколько вам лет?');
let messageForUser = ageUser < 6 ? alert('Привет, малыш') : ageUser < 16 ? alert('Привет, парень') : alert('Здравствуйте');

// 3. Измените программу так, чтобы когда пользователь нажимал 
// кнопку «отмена», выводилось сообщение «вы не 
// ввели свой возраст»

let ageOfUser = prompt('Сколько вам лет?');
if (ageOfUser === null || ageOfUser === '') {
    alert('Вы не ввели свой возраст!');
} else if (isNaN(+ageOfUser)) {
     alert('Введите ЧИСЛО');
} else {
    +ageOfUser < 6 ? alert('Привет, малыш') : +ageOfUser < 16 ? alert('Привет, парень') : alert('Здравствуйте');
};
