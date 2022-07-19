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

let userNumber = +prompt( 'Введите число' );
let sumNumber = 0;

if (isNaN(userNumber) || userNumber <= 0) {
    alert('Введите число больше ноля цифрами');    
    } else { for (let i = 1; i <= userNumber; i++) {
        sumNumber = sumNumber + i;
    }         
}

if (sumNumber > 0) {
    console.log(sumNumber);
}