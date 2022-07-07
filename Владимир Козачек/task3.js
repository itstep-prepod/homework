


let age = prompt ('сколько вам лет');
if (null === age){
    alert('вы не ввели свой возраст')
} else if (Number(age)<6){
    alert('Привет,малыш')
} else if (Number(age)<16){
    alert('Привет,парень')
} else  {
    alert('Здравствуйте')
}


alert( null === age ? 'вы не ввели свой возраст' : Number(age)<6 ? 'Привет,малыш' : Number(age)<16 ? 'Привет,парень' : 'Здравствуйте')


// Boolean('asdasd')
// String('zxcvvxc')
// rtyhthyt
// if (age > 0){
//     console.log('Привет');
// } else if (age === ''){
//  alert ('Вы не ввели свой возраст');
// }

