// 1. Пользователь вводит 3 числа, вывести на экран наибольшее из этих 3х чисел.

let userNamberOne = +prompt('Введите первое число','');
let userNamberTwe = +prompt('Введите второе число','');
let userNamberThree = +prompt('Введите третье число','');

if (userNamberOne > userNamberTwe && userNamberOne > userNamberThree) {
    alert (userNamberOne);
}   else if (userNamberTwe > userNamberThree && userNamberTwe > userNamberOne) {
        alert (userNamberTwe);
    } else if (userNamberThree > userNamberTwe && userNamberThree > userNamberOne) {
            alert (userNamberThree);
        }  else if (userNamberThree === userNamberTwe && userNamberThree === userNamberOne && userNamberTwe === userNamberOne) {
                alert ("все числа равны");
            } else {
                    alert ("что-то не то");
                }

// 2. Пользователь вводит номер дня недели, вывести на экран название этого дня.

let dayoftheweek = +prompt('Введите номер дня недели');

switch (dayoftheweek) {
    case 1:
        alert ('Понедельник');
        break;
    case 2:
        alert ('Вторник');
        break;
    case 3:
        alert ('Среда');
        break;
    case 4:
        alert ('Четверг');
        break;
    case 5:
        alert ('Пятница');
        break;
    case 6:
        alert ('Суббота');
        break;
    case 7:
        alert ('Воскресенье');
        break;
    default:
        alert ('В неделе всего, к сожалению, семь дней, попробуй еще раз ^_^');
}
 


