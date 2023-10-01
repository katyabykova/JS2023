fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(value => {
        let box = document.createElement('div');
        box.classList.add('flex', 'just_center', 'col_gap');
        document.body.append(box);
        value.forEach(({id, name}) => {
            let a = document.createElement('a');
            a.href = `user-details.html?id=${id}`;
            let div = document.createElement('div');
            div.innerText = `ID: ${id}, Name: ${name}`;
            div.classList.add('userDiv', 'flex', 'just_center', 'align_center', 'w30');
            box.append(a);
            a.append(div)
        })
    })