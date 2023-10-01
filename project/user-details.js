let id = JSON.parse(new URL(location.href).searchParams.get('id'));
let block = document.createElement('div');
block.classList.add('flex', 'just_center');
document.body.append(block);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(value => {
        let box = document.createElement('div');
        block.append(box);
        box.classList.add('flex', 'box', 'h25w87', 'mtop40ptpl', 'column')
        let print = function (value) {
            for (const element in value) {
                if (typeof value[element] !== 'object') {
                    let div = document.createElement('div');
                    div.innerHTML = `${element.toUpperCase()} : <i>${value[element]}</i>`
                    div.classList.add('bord_box', 'h6', 'w15');
                    box.append(div)
                } else {
                    let div1 = document.createElement('div');
                    box.append(div1);
                    div1.innerHTML = `${element.toUpperCase()} :`
                    div1.classList.add('bord_box', 'h6', 'w15');
                    print(value[element])
                }
            }
        }
        print(value);
    })
    .then(() => {
        let button = document.createElement('button');
        button.classList.add('userDiv', 'w90', 'h6', 'flex', 'just_center', 'align_center');
        button.innerHTML = `<i>POSTS OF CURRENT USER</i>`
        block.append(button);
        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(value => {
                        let boxTitle = document.createElement('div');
                        boxTitle.classList.add('flex', 'w90', 'title', 'col_gap');
                        block.append(boxTitle);
                        for (const el of value) {
                            let smallBox = document.createElement('div');
                            smallBox.classList.add('box', 'w15', 'h18', 'p10px', 'bord_box');
                            boxTitle.append(smallBox);
                            smallBox.innerHTML = `<p> TITLE: <i>${el.title}</i></p>`
                            button.disabled = true;
                            let littlebutton = document.createElement('button');
                            littlebutton.classList.add('userDiv', 'flex', 'align_center');
                            littlebutton.innerHTML = `<i>See Post</i>`;
                            smallBox.append(littlebutton);
                            littlebutton.onclick = () => {
                                document.location = 'post-details.html'
                                localStorage.setItem('post', JSON.stringify(el))
                            }
                        }
                    }
                )
        }
    })

