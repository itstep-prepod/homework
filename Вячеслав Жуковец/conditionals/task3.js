var age = prompt('Сколько вам лет?');

console.log ((age === null || age === '' || isNaN(age)) ? 'Вы не ввели свой возраст!' : age < 6 ? 'Привет, малыш!' : age < 16 ? 'Привет, парень!':'Здравствуйте!');