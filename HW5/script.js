// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle = (a, b) => a * b;
console.log(rectangle(2, 5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;
let area = (r) => PI * r ** 2;
console.log(area(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (r, h) => 2 * PI * r * h;
console.log(cylinder(2, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = (array) => {
    for (const el of array) {
        console.log(el)
    }
}
arr([1, 2, 3, 4, 5, 6])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraf = (text) => document.write(`<p>${text}</p>`)
paragraf('HELLO')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let li = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
li('Katya')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liN = (text, n) => {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
liN('Okten', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let mixLi = (array) => {
    document.write(`<ul>`)
    for (const el of array) {
        document.write(`<li>${el}</li>`)
    }
    document.write(`</ul>`)
}
mixLi([1, 2, 3, 'hello', true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [
    {
        id: 1,
        name: 'Katya',
        age: 18
    },
    {
        id: 2,
        name: 'Masha',
        age: 20
    },
    {
        id: 3,
        name: 'Misha',
        age: 22
    }
]

let noName = (array) => {
    for (const el of array) {
        for (const obj in el) {
            document.write(`<div>${obj}: ${el[obj]}</div>`)
        }
    }
}
noName(array)

// - створити функцію яка повертає найменьше число з масиву

let minNum = (arr) => {
    let min = arr[0];
    for (const el of arr) {
        if (el < min) {
            min = el
        }
    }
    return min
}
console.log(minNum([1, -2, 3, 4, 5, 6, 7, 8, 9]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let sum = 0;
    for (const el of arr){
        sum = sum + el
    }
    return sum
}
console.log(sum([10,2,3]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2) => {
    let oldIndex1 = arr[index1]
    arr[index1] = arr[index2];
    arr[index2] = oldIndex1;
    console.log(arr)
}
swap([1,2,3,4,5],0,4)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const el of currencyValues){
        if (el.currency === exchangeCurrency){
            return sumUAH/el.value
        }
    }
}
console.log(exchange(20000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))