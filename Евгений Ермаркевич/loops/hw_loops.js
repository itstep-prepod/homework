// 1. пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным) 

let userNumber = +prompt( 'Введите число' );

if (userNumber > 0) {
    for ( ; userNumber >= 0; userNumber--) {
        console.log(userNumber);        
    }    
    } else { for ( ; userNumber <= 0; userNumber++) {
        console.log(userNumber);        
    }     
}
