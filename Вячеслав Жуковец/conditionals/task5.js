// Создать программу в которой сравнивается возраст 
// двух человек (Федота и Митрофана).

// Если возраст Федота больше чем возраст Митрофана, 
// то должно выводится сообщение, в котором указана 
// разница в возрасте: «Федот старше Митрофана на 3 ».

// Если возраст Митрофана больше, то выводится такое 
// сообщение: «Митрофан старше Федота на 5».

// Если возраст обоих человек один и тот же, то 
// выводится такое сообщение: «Федот и Митрофан 
// одного возраста».

let ageFedot = (prompt('Федот, введи свой возраст!')).trim();
let ageMitrofan = (prompt('Митрофан, введи свой возраст!')).trim();
let difference
if((ageFedot === null || ageFedot === '' || isNaN(ageFedot)) && (ageMitrofan === null || ageMitrofan === '' || isNaN(ageMitrofan))){
    alert ('Некорректно введён возраст!');     
}else if (ageFedot>ageMitrofan){
    alert (`Федот старше Митрофана на ${difference = ageFedot - ageMitrofan } лет/года`);
}else if (ageMitrofan>ageFedot){
    alert(`Митрофан старше федота на ${difference = ageMitrofan - ageFedot} лет/год`);
}else if (ageFedot === ageMitrofan){
    alert ('Федот и Митрофан одного возраста!'); 
}