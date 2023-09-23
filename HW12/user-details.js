let id = JSON.parse(new URL(location.href).searchParams.get('id'));
let details = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp=>resp.json())
    .then(value => {
        let print = function (value){
           for (const element in value){
               if(typeof value[element] !== 'object'){
               let div = document.createElement('div');
               div.innerText = `${element}: ${value[element]}`
               document.body.append(div)
           }else{
                   let div1 = document.createElement('div');
                   document.body.append(div1);
                   div1.innerText = `${element}:`
                   print(value[element])
               }
           }
    }
    print(value)
    })