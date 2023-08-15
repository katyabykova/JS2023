//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  Вивести кожну змінну за допомогою: console.log
{
    let a = 'hello';
    let b = 'owu';
    let c = 'com';
    let d = 'ua';
    let e = 1;
    let f = 10;
    let g = -999;
    let h = 123;
    let i = 3.14;
    let j = 2.7;
    let k = 16;
    let l = true;
    let m = false;
    console.log(a, b, c, d, e, f, g, h, i, j, k, l, m)
}

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

{
    let firstName = 'KATERYNA';
    let middleName = 'ВОЛОДИМИРІВНА';
    let lastName = 'BYKOVA';
    let person = `${firstName} ${middleName} ${lastName}`;
    console.log(person)
}

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c)


//Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName = prompt("Введіть ім'я");
let middleName = prompt('Введіть по-батькові');
let age = prompt('Введіть вік');
console.log(`${firstName} ${middleName} ${age}`)