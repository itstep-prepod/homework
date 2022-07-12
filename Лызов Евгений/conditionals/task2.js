// 1. Пользователь вводит 3 числа, вывести на
// экран наибольшее из этих 3х чисел



let input1 = +prompt('Введите число');
let input2 = +prompt('Введите число');
let input3 = +prompt('Введите число');

let bigNum = Math.max(input1, input2, input3);

alert(`Наибольшее из 3х чисел : ${bigNum}`);




// 2. Пользователь вводит номер дня недели,
//    вывести на экран название этого дня.


let numDay = +prompt('Введите номер дня недели 1-7');

switch (numDay) {
   case 1: 
      alert('Понедельник');
      break;
   case 2: 
      alert('Вторник');
      break;
   case 3: 
      alert('Cреда');
      break;
   case 4: 
      alert('Четверг');
      break;
   case 5: 
      alert('Пятница');
      break;
   case 6: 
      alert('Суббота');
      break;
   case 7: 
      alert('Воскресенье');
      break;
}



