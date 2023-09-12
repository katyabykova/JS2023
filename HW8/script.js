// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone
    }
}

let arr = [
    new User(10, 'Katya', 'Bykova', 'a@i.ua', '098803'),
    new User(2, 'Kristina', 'Bykova', 'a@i.ua', '098803'),
    new User(3, 'Kateryna', 'Bykova', 'a@i.ua', '098803'),
    new User(4, 'Klava', 'Bykova', 'a@i.ua', '098803'),
    new User(5, 'Kira', 'Bykova', 'a@i.ua', '098803'),
    new User(6, 'Klara', 'Bykova', 'a@i.ua', '098803'),
    new User(7, 'Krasava', 'Bykova', 'a@i.ua', '098803'),
    new User(8, 'Kikimora', 'Bykova', 'a@i.ua', '098803'),
    new User(9, 'Kisa', 'Bykova', 'a@i.ua', '098803'),
    new User(1, 'Kykysia', 'Bykova', 'a@i.ua', '098803')
]
console.log(arr)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arr.filter(value => value.id % 2 === 0))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arr.sort((a, b) => a.id - b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone,)
        this.order = order
    }
}

let newArr = [
    new Client(10, 'Katya', 'Bykova', 'a@i.ua', '098803', ['book']),
    new Client(2, 'Kristina', 'Bykova', 'a@i.ua', '098803', ['book', 'pen']),
    new Client(3, 'Kateryna', 'Bykova', 'a@i.ua', '098803', ['book', 'pen']),
    new Client(4, 'Klava', 'Bykova', 'a@i.ua', '098803', ['book']),
    new Client(5, 'Kira', 'Bykova', 'a@i.ua', '098803', ['book', 'pen']),
    new Client(6, 'Klara', 'Bykova', 'a@i.ua', '098803', ['book', 'pen']),
    new Client(7, 'Krasava', 'Bykova', 'a@i.ua', '098803', ['book', 'pen']),
    new Client(8, 'Kikimora', 'Bykova', 'a@i.ua', '098803', ['book', 'pen', 'pencil']),
    new Client(9, 'Kisa', 'Bykova', 'a@i.ua', '098803', ['book', 'pen']),
    new Client(1, 'Kykysia', 'Bykova', 'a@i.ua', '098803', ['book', 'pen', 'pencil'])
]
console.log(newArr)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(newArr.sort((a, b) => a.order.length - b.order.length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, name, year, speed, volume) {
    this.model = model;
    this.name = name;
    this.year = year;
    this.speed = speed;
    this.volume = volume;
    this.drive = function () {
        console.log(`Їдемо зі шв. ${speed} на год.`)
    }
    this.info = function () {
        console.log({model, name, year, speed, volume})
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(speed += newSpeed)
    }
    this.changeYear = function (newValue) {
        console.log(speed = newValue)
    }
    this.addDriver = function (driver) {
        console.log(this.driver = driver)
        console.log(this)
    }
}

let car1 = new Car('vectra', 'opel', 2020, 250, 2)
car1.drive()
car1.info()
car1.increaseMaxSpeed(300)
car1.changeYear(2055)
car1.addDriver({age: 56, name: 'Vasya'})

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, name, year, speed, volume) {

        this.model = model;
        this.name = name;
        this.year = year;
        this.speed = speed;
        this.volume = volume
    }

    drive() {
        console.log(`Їдемо зі шв. ${this.speed} на год.`)
    }

    info() {
        console.log(`${this.model, this.name, this.year, this.speed, this.volume}`)
    }

    increaseMaxSpeed(newSpeed) {
        console.log(this.speed += newSpeed)
    }

    changeYear(newValue) {
        console.log(this.speed = newValue)
    }

    addDriver(driver) {
        console.log(this.driver = driver)
        console.log(this)
    }
}

let car2 = new Car1('vectra', 'opel', 2020, 250, 2)
car2.drive()
car2.info()
car2.increaseMaxSpeed(800)
car2.changeYear(2066)
car2.addDriver({age: 78, name: 'Vasya'})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Pop(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size
}

let popArr = [
    new Pop('sveta', 35, 39),
    new Pop('katya', 21, 45),
    new Pop('ola', 25, 44),
    new Pop('vika', 31, 43),
    new Pop('lena', 41, 42),
    new Pop('zina', 51, 41),
    new Pop('zoya', 61, 40),
    new Pop('larisa', 71, 38),
    new Pop('galina', 81, 37),
    new Pop('dasha', 91, 36),
]

class Prince extends Pop {
    constructor(name, age, size) {
        super(name, age, size)
    }
}

let prince = new Prince('vasya', 45, 37)

for (const el of popArr) {
    if (el.size === prince.size) {
        console.log(`${el.name}- наша принцеса`)
    }
}

console.log(popArr.find(value => value.size === prince.size), `наша принцеса`)

