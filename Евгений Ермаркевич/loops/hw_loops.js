// 1. пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным) 

// let userNumber = +prompt( 'Введите число' );

// if (userNumber > 0) {
//     for ( ; userNumber >= 0; userNumber--) {
//         console.log(userNumber);        
//     }    
//     } else { for ( ; userNumber <= 0; userNumber++) {
//         console.log(userNumber);        
//     }     
// }


// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число

// let userNumber = +prompt( 'Введите число' );
// let sumNumber = 0;

// if (isNaN(userNumber) || userNumber <= 0) {
//     alert('Введите число больше ноля цифрами');    
//     } else { for (let i = 1; i <= userNumber; i++) {
//         sumNumber = sumNumber + i;
//     }         
// }

// if (sumNumber > 0) {
//     console.log(sumNumber);
// }


// 3. написать программу воторая определяет количество 
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

let countNumber = +prompt( 'Введите количество чисел' );
let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;
let userNumber;

for (let i = 0; i < countNumber; i++) {
    userNumber = +prompt( 'Введите число' );
        if (userNumber > 0) { positiveNumber++;            
        } else if (userNumber < 0) { negativeNumber++;            
        } else { zero++; }
}         

console.log( `положительных: ${positiveNumber}
отрицательных: ${negativeNumber}
нулей: ${zero}`);

