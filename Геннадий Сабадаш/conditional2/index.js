// . Напишите программу в которой пользователя
// спрашивают его пол. Если был выбран мужской
// пол, то пользователя просят ввести возраст (в
// программе используйте 2 prompt’a один для пола,
// второй для возраста) . В зависимости от возраста
// выводится статус человека. От 0 до 14 (вкл.) –
// «подросток», от 14 до 20 (вкл.) – «юноша», от 20 до
// 60 (вкл.) – «молодой человек», от 60 до 100 – «дед».
// Если был выбран женский пол, то вне зависимости
// от указанного возраста всегда выводится
// «девушка»

let youSex = prompt("какой Ваш пол ЖЕН или МУЖ");

if (youSex === 'муж'){
    let youOld = prompt("какой у вас возраст?");
    if (youOld > 0 && youOld < 14 ){
        alert("подросток"); 
    } else if (youOld > 14 && youOld < 20){
        alert("юноша");
    } else if (youOld > 20 && youOld < 60 ){
        alert("молодой человек");
    } else if (youOld > 60 && youOld < 100 ){
        alert('дед');    
    }
} else if (youSex === 'жен'){
    alert('девушка');
} else {
    alert('непонятно кто');
}


   
    


