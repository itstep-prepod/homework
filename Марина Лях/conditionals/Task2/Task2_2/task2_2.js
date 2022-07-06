// 2. Пользователь вводит номер дня недели, вывести на экран название этого дня

// let userNumber = +prompt('enter number of the day of the week');

// if (userNumber === 1) {
//    console.log('Monday');
//    alert(`Monday`);
// } else if (userNumber === 2) {
//     console.log('Tuesday');
//     alert(`Tuesday`);
// } else if (userNumber === 3) {
//     console.log('Wednesday');
//     alert(`Wednesday`);
// } else if (userNumber === 4) {
//     console.log('Thursday');
//     alert(`Thursday`);
// } else if (userNumber === 5) {
//     console.log('Friday');
//     alert(`Friday`);
// } else if (userNumber === 6) {
//     console.log('Saturday');
//     alert(`Saturday`);
// } else if (userNumber === 7) {
//     console.log('Sunday');
//     alert(`Sunday`);
// }
let userNumber = +prompt('enter number of the day of the week');
switch (userNumber) {
    case 1:
        console.log('Monday');
        alert(`Monday`);  
        break; 
    case 2:
        console.log('Tuesday');
        alert(`Tuesday`);  
        break; 
    case 3:
        console.log('Wednesday');
        alert(`Wednesday`);  
        break; 
    case 4:
        console.log('Thursday');
        alert(`Thursday`);  
        break; 
    case 5:
        console.log('Friday');
        alert(`Friday`);  
        break; 
    case 6:
        console.log('Saturday');
        alert(`Saturday`);  
        break; 
    case 7:
        console.log('Sunday');
        alert(`Sunday`);  
        break; 
    default:
        console.log('you entered incorrect data, please enter the number 1-7 again');
        alert(`you entered incorrect data, please enter the number 1-7 again`);
    // break;
}