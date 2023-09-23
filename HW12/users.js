// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let users = fetch('http://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(value =>{
        value.forEach(x=>{
            let div = document.createElement('div');
            div.innerHTML = `<a href="user-details.html?id=${x.id}">Id: ${x.id} - Name: ${x.name}</a>`;
            document.body.append(div);
        })
    })
