// Создать программу в которой сравнивается возраст 
// двух человек (Федота и Митрофана).
//  Если возраст Федота больше чем возраст Митрофана, 
// то должно выводится сообщение, в котором указана 
// разница в возрасте: «Федот старше Митрофана на 3 ».
//  Если возраст Митрофана больше, то выводится такое 
// сообщение: «Митрофан старше Федота на 5».
//  Если возраст обоих человек один и тот же, то 
// выводится такое сообщение: «Федот и Митрофан 
// одного возраста».
//  Задание необходимо выслать в архиве. В архив 
// поместите html-файл и javascript-файл.
//  Не забудьте подключить javascript-файл к html
// документу

let age1 = +prompt('Введите возраст Федота');
let age2 = +prompt('Введите возраст Митрофана');
if (age1 > age2) {
    alert('Федот старше Митрофана на 3');
} else if (age1 < age2) {
    alert('Митрофан старше Федота на 5');
} else if (age1 === age2) {
    alert('Федот и Митрофан одного возраста');
} else {
    alert('введите значение еще раз');
} 