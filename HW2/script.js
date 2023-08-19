//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = ['a', 1, 'b', true, ['hello', false], 5, 'my name is', -100, '5th', 0.0];
console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4][0], arr1[4][1], arr1[5], arr1[6], arr1[7], arr1[8], arr1[9])

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Kolobok',
    pageCount: 10,
    genre: 'drama'
}
let book2 = {
    title: 'Bremenski musikanti',
    pageCount: 15,
    genre: 'comedy'
}
let book3 = {
    title: 'Hroniki Narnii',
    pageCount: 1000,
    genre: 'adventures'
}

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

book1.authors = [{
    name: 'lev Tolstoi',
    age: 45
}]
book2.authors = [{
    name: 'Brothers Grimm',
    age: 47
}]
book3.authors = [{
    name: 'Klaiv S.Liuis',
    age: 65
}]
console.log(book1, book2, book3)


//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr2 = [
    {
        name: 'ivan',
        username: 'ivan',
        password: 'ivan123'
    },
    {
        name: 'petro',
        username: 'petro',
        password: 'petro123'
    },
    {
        name: 'olya',
        username: 'olya',
        password: 'olya123'
    },
    {
        name: 'sveta',
        username: 'sveta',
        password: 'sveta123'
    },
    {
        name: 'katya',
        username: 'katya',
        password: 'katya123'
    },
    {
        name: 'oleg',
        username: 'oleg',
        password: 'oleg123'
    },
    {
        name: 'ira',
        username: 'ira',
        password: 'ira123'
    },
    {
        name: 'oksana',
        username: 'oksana',
        password: 'oksana123'
    },
    {
        name: 'kostya',
        username: 'kostya',
        password: 'kostya123'
    },
    {
        name: 'matilda',
        username: 'matilda',
        password: 'matilda123'
    }
]
console.log(arr2[0].password, arr2[1].password, arr2[2].password, arr2[3].password, arr2[4].password, arr2[5].password, arr2[6].password, arr2[7].password, arr2[8].password, arr2[9].password)

//Логічні розгалуження:
//    - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let xx = 1;
(xx !== 0) ? console.log('Вірно') : console.log('Не вірно')

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 8;
if (time >= 0 && time <= 59 && Number.isInteger(time)) {
    if (time >= 0 && time < 15) {
        console.log('1-ша чверть')
    } else if (time >= 15 && time < 30) {
        console.log('2-га чверть')
    } else if (time >= 30 && time < 45) {
        console.log('3-тя чверть')
    } else if (time >= 45 && time <= 59) {
        console.log('4-та чверть')
    }
} else {
    console.log('невірний ввод')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1.2;
if (day >= 1 && day <= 31 && Number.isInteger(day)) {
    if (day >= 1 && time < 11) {
        console.log('1-ша декада')
    } else if (day >= 11 && time < 21) {
        console.log('2-га декада')
    } else if (day >= 21 && time <= 31) {
        console.log('3-тя декада')
    }
} else {
    console.log('невірний ввод')
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = prompt('Введіть номер дня тижня');
switch (dayNumber) {
    case '1':
        console.log('Робота');
        break;
    case '2':
        console.log('Робота');
        break;
    case '3':
        console.log('Робота');
        break;
    case '4':
        console.log('Робота');
        break;
    case '5':
        console.log('Робота');
        break;
    case '6':
        console.log('Вихідний');
        break;
    case '7':
        console.log('Спорт');
        break;
    default:
        console.log('Невірний ввод')
}

//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.

let firstNum = 1;
let secondNum = 100;
    if(typeof firstNum =="number"&&typeof secondNum=="number"){
        if (firstNum>secondNum){
            console.log(`${firstNum} більше`)
        }else if(secondNum>firstNum){
            console.log(`${secondNum} більше`)
        }else {
            console.log(`Числа рівні`)
        }
    }else{console.log(`невірний ввод`)}

//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = false;
if(x===false||x===null||x===undefined||x===0||x===-0||x===0n||x===NaN||x===""){
    x = 'default'
}
console.log(x)
//-----Або
let xxx = 0;
if (!xxx){
    xxx = 'default'
}
console.log(xxx)
//    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

    if(coursesAndDurationArray[0].monthDuration>5){
        console.log(`${coursesAndDurationArray[0].title} - CУПЕР!`)
    }
    if(coursesAndDurationArray[1].monthDuration>5){
        console.log(`${coursesAndDurationArray[1].title} - CУПЕР!`)
    }
    if(coursesAndDurationArray[2].monthDuration>5){
        console.log(`${coursesAndDurationArray[2].title} - CУПЕР!`)
    }
    if(coursesAndDurationArray[3].monthDuration>5){
        console.log(`${coursesAndDurationArray[3].title} - CУПЕР!`)
    }
    if(coursesAndDurationArray[4].monthDuration>5){
        console.log(`${coursesAndDurationArray[4].title} - CУПЕР!`)
    }
    if(coursesAndDurationArray[5].monthDuration>5){
        console.log(`${coursesAndDurationArray[5].title} - CУПЕР!`)
    }