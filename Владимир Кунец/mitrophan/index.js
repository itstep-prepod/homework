// Создать программу в которой сравнивается возраст двух человек (Федота и Митрофана).
//  Если возраст Федота больше чем возраст Митрофана, то должно выводится сообщение, в котором указана разница в возрасте: «Федот старше Митрофана на 3 ».
//  Если возраст Митрофана больше, то выводится такое сообщение: «Митрофан старше Федота на 5».
//  Если возраст обоих человек один и тот же, то выводится такое сообщение: «Федот и Митрофан одного возраста».
//  Задание необходимо выслать в архиве. В архив поместите html-файл и javascript-файл.
//  Не забудьте подключить javascript-файл к html документу.

let Mitrophan = +prompt('Введите возраст Митрофана');
let Phedor = +prompt('Введите возраст Федора');

if (Phedor > Mitrophan) {
    let PhedorWin = Phedor - Mitrophan;
    alert ('Федот старше Митрофана на ' +PhedorWin);
} else if (Phedor < Mitrophan) {
    let MitrophanWin = Mitrophan - Phedor;
    alert ('Митрофан старше Федота на ' +PhedorWin);
} else if (Phedor === Mitrophan){
    alert ('Федот и Митрофан одного возраста');
} else {
    alert ('Errore 404');
}