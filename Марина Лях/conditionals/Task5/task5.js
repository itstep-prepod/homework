// Создать программу в которой сравнивается возраст 
// двух человек (Федота и Митрофана).
//  Если возраст Федота больше чем возраст Митрофана, 
// то должно выводится сообщение, в котором указана 
// разница в возрасте: «Федот старше Митрофана на 3 ».
//  Если возраст Митрофана больше, то выводится такое 
// сообщение: «Митрофан старше Федота на 5».
//  Если возраст обоих человек один и тот же, то 
// выводится такое сообщение: «Федот и Митрофан 
// одного возраста».



let ageF = +prompt('введите возраст Федота');
let ageM = +prompt('введите возраст Митрофана');
let different;
if (ageF > ageM){
   different = ageF - ageM;
   alert(`Федот старше Митрофана на ${different}`);
}  else if (ageF < ageM) {
   different = ageM - ageF;
   alert(`Митрофан старше Федота на ${different}`);
}  else if (ageF === ageM) {
   alert(`Федот и Митрофан одного возраста`);
}  else if (isNaN(ageF) || isNaN(ageM)){
   alert(`введите числа`);
}
