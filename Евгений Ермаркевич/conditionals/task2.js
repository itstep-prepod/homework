// Напишите программу в которой пользователя
// спрашивают его пол. Если был выбран мужской
// пол, то пользователя просят ввести возраст (в
// программе используйте 2 prompt’a один для пола,
// второй для возраста). В зависимости от возраста
// выводится статус человека. От 0 до 14 (вкл.) –
// «подросток», от 14 до 20 (вкл.) – «юноша», от 20 до
// 60 (вкл.) – «молодой человек», от 60 до 100 – «дед».
// Если был выбран женский пол, то вне зависимости
// от указанного возраста всегда выводится
// «девушка».


let sex = prompt ( 'Введите Ваш пол' );

if (sex === 'мужской') {
    let age = +prompt ('Введите ваш возраст');
    if (age > 0 && age <= 14) {
        alert ( 'подросток' );
    } else if (age > 14 && age <= 20) {
        alert ( 'юноша' );
    } else if (age > 20 && age <= 60) {
        alert ( 'молодой человек' );
    } else if (age > 60 && age <= 100) {
        alert ( 'дед' );
    }
} else if (sex === 'женский') {
    alert ( 'девушка' );
} else { alert ( 'Введите мужской или женский' );
}