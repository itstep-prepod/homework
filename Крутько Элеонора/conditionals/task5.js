//  Создать программу в которой сравнивается возраст 
// двух человек (Федота и Митрофана).
//  Если возраст Федота больше чем возраст Митрофана, 
// то должно выводится сообщение, в котором указана 
// разница в возрасте: «Федот старше Митрофана на 3 ».
//  Если возраст Митрофана больше, то выводится такое 
// сообщение: «Митрофан старше Федота на 5».
//  Если возраст обоих человек один и тот же, то 
// выводится такое сообщение: «Федот и Митрофан 
// одного возраста».

let ageFedot = +prompt('Введите возраст Федота');
let ageMitrofan = +prompt('Введите возраст Митрофана');
let differentAge;
if (ageFedot > ageMitrofan) {
    differentAge = ageFedot - ageMitrofan;
    alert(`Федот старше Митрофана на ${differentAge}`);
} else if (ageMitrofan > ageFedot) {
    differentAge = ageMitrofan - ageFedot;
    alert(`Митрофан старше Федота на ${differentAge}`);
} else if (ageFedot === ageMitrofan) {
    alert('Федот и Митрофан одного возраста');
} else if (isNaN(ageFedot) || isNaN(ageMitrofan)){
    alert('Введите корректные данные');
};