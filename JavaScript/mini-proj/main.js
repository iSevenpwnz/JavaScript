// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули.

let arr=[];
let wrap = document.createElement('div');
wrap.setAttribute('id','users');
// wrap.innerText='UsersBox:';
document.body.appendChild(wrap);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(someResponse =>someResponse.json())
    .then(someUsers=>{
        for (let i = 0; i < someUsers.length; i++) {
            const user = someUsers[i];
            const boxUser = document.createElement('div');
            const idUser = document.createElement('h5');
            const nameUser = document.createElement('p');
            nameUser.setAttribute('class','card-text');
            const button = document.createElement('button');
            button.setAttribute('class','btn btn-primary');
            // inner:
            idUser.innerText=user.id;
            nameUser.innerText=user.name;
            button.innerText=`show user details`;
            //append:
            wrap.appendChild(boxUser);
            boxUser.append(idUser,nameUser,button);
            button.onclick=function(){

                document.location='user-details.html';
                localStorage.setItem('arr', JSON.stringify(user));
            }
        }
    })