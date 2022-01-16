let localSt = localStorage.getItem("post");
let postObject=JSON.parse(localSt);
console.log('postObject:', postObject)


let wrap = document.createElement('div');

let div1 = document.createElement('div');
div1.classList.add('top');
let div2 = document.createElement('div');
div2.classList.add('bottom');


let postDetailsDiv = document.createElement('div');
postDetailsDiv.classList.add('card');
let idPost = document.createElement('p');

let titlePost = document.createElement('h5');
titlePost.classList.add('card-title')
let bodyPost = document.createElement('p');
bodyPost.classList.add('card-text');



// inner:
idPost.innerText = postObject.id;
titlePost.innerText =postObject.title;
bodyPost.innerText =postObject.body;







// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

fetch(`https://jsonplaceholder.typicode.com/posts/${postObject.id}/comments`)
    .then(value=>value.json())
    .then(comments=>{
        for (let i = 0; i < comments.length; i++) {
            const comment = comments[i];

            let commentUl =document.createElement('ul');
            commentUl.classList.add('list-group');
            let idComment=document.createElement('li');
            idComment.setAttribute('class','list-group-item list-group-item-success')
            let nameComment=document.createElement('li');
            nameComment.setAttribute('class','list-group-item list-group-item-light')
            let emailComment=document.createElement('li');
            emailComment.setAttribute('class','list-group-item list-group-item-warning')

            let bodyComment=document.createElement('li');
            bodyComment.setAttribute('class','list-group-item list-group-item-info')



            idComment.innerText = `id:    ${comment.id}`;
            nameComment.innerText = `name:    ${comment.name}`;
            emailComment.innerText = comment.email;
            bodyComment.innerText = `body:    ${comment.body}`;



            document.body.appendChild(wrap);
            wrap.append(div1,div2);
            div1.appendChild(postDetailsDiv);
            div2.appendChild(commentUl);

            commentUl.append(idComment,nameComment,emailComment,bodyComment)
            postDetailsDiv.append(idPost,titlePost,bodyPost);


        }

    })