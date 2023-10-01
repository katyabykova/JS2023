let post = JSON.parse(localStorage.getItem('post'));
let box = document.createElement('div');
document.body.append(box);
box.classList.add('flex', 'box', 'column', 'h20', 'w80', 'post', 'just_center', 'align_center', 'br');
for (const el in post) {
    let data = document.createElement('div');
    data.innerHTML = `${el.toUpperCase()} : <i>${post[el]}</i>`
    data.classList.add('w31')
    box.append(data);
}
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(resp => resp.json())
    .then(coments => {
            let boxTitle = document.createElement('div');
            boxTitle.classList.add('flex', 'w80', 'title', 'col_gap2');
            document.body.append(boxTitle);
            coments.forEach(coment => {
                let smallBox = document.createElement('div');
                smallBox.classList.add('box', 'w18', 'h40', 'p10px', 'bord_box', 'hidden', 'br', 'fs');
                boxTitle.append(smallBox);
                smallBox.innerHTML = `
<div>POSTID : <i>${coment.postId}</i><br>
ID : <i>${coment.id}</i><br>
EMAIL : <i>${coment.email}</i><br><br>
BODY: <i>${coment.body}</i></div>`
            })
        }
    )




