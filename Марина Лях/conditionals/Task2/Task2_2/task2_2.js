// 2. Пользователь вводит номер дня недели, вывести на экран название этого дня

let userNumber = +prompt('введите номер дня недели');

if (userNumber === 1) {
   console.log('Monday');
   alert(`Monday`);
} else if (userNumber === 2) {
    console.log('Tuesday');
    alert(`Tuesday`);
} else if (userNumber === 3) {
    console.log('Wednesday');
    alert(`Wednesday`);
} else if (userNumber === 4) {
    console.log('Thursday');
    alert(`Thursday`);
} else if (userNumber === 5) {
    console.log('Friday');
    alert(`Friday`);
} else if (userNumber === 6) {
    console.log('Saturday');
    alert(`Saturday`);
} else if (userNumber === 7) {
    console.log('Sunday');
    alert(`Sunday`);
}