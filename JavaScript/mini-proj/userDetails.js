// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.

let techStack = localStorage.getItem("arr");
let arrLocalStorege=JSON.parse(techStack);


let wrap = document.createElement('div');
document.body.appendChild(wrap)   //главный блок объекта
wrap.setAttribute('id', 'wrap')



let blok = document.createElement('div');
blok.setAttribute('class', 'list-group-item list-group-item-dark')
let blokRight = document.createElement('div');
blokRight.setAttribute('class', 'list-group-item list-group-item-dark')
//let start key
let idAdd = document.createElement('p');
let button = document.createElement('button');
button.setAttribute('class','btn btn-secondary btn-lg')
let nameAdd = document.createElement('p');
let username=document.createElement('p');
let email = document.createElement('p');
let address = document.createElement('div');
address.setAttribute('class','list-group-item list-group-item-success')
let phone = document.createElement('p');
let website=document.createElement('p');
let company=document.createElement('div');
company.setAttribute('class', 'list-group-item list-group-item-danger');

// let address Date:
let street = document.createElement('p');
let suite = document.createElement('p');
let city = document.createElement('p');
let zipcode = document.createElement('p');
let geo = document.createElement('div');
geo.setAttribute('class', 'list-group-item list-group-item-warning')
let lat= document.createElement('p');
let lng= document.createElement('p');

//let company Date:
let nameCompany=document.createElement('p');
let catchPhrase = document.createElement('p');
let  bs = document.createElement('p');

//innerText allDate:
idAdd.innerText = `ID:   ${arrLocalStorege.id}`;
button.innerText='go to '
nameAdd.innerText = `NAME:   ${arrLocalStorege.name}`;
username.innerText = `USERNAME:   ${arrLocalStorege.username}`;
email.innerText = `EMAIL:   ${arrLocalStorege.email}`;
address.innerText='ADDRESS: ';
street.innerText=`STREET:   ${arrLocalStorege.address.street}`;
suite.innerText=`SUITE:   ${arrLocalStorege.address.suite}`;
city.innerText=`CITY:   ${arrLocalStorege.address.city}`;
zipcode.innerText=`ZIPCODE:   ${arrLocalStorege.address.zipcode}`;
geo.innerText='GEO:  ';
lat.innerText= `LAT:   ${arrLocalStorege.address.geo.lat}`;
lng.innerText= `LNG:   ${arrLocalStorege.address.geo.lng}`;
phone.innerText=`PHONE:  ${arrLocalStorege.phone}`;
website.innerText=`SITE:  www.${arrLocalStorege.website}`;
company.innerText='COMPANY:  ';
nameCompany.innerText=`NAME:  ${arrLocalStorege.company.name}`;
catchPhrase.innerText=`PHRASE:  ${arrLocalStorege.company.catchPhrase}`;
bs.innerText=`BS:  ${arrLocalStorege.company.bs}`;
button.innerText='post of current user';







//append wrap:
wrap.append(blok, blokRight);
//append block:
blok.append(button,idAdd);
blok.appendChild(nameAdd);
blok.appendChild(username);
blok.appendChild(email);
blok.appendChild(address);
blok.appendChild(phone);
blok.appendChild(website);
blok.appendChild(company);

//append address:
address.appendChild(street);
address.appendChild(suite);
address.appendChild(city);
address.appendChild(zipcode);
address.appendChild(geo);
//append geo:
geo.appendChild(lat);
geo.appendChild(lng);
//append company:
company.append(nameCompany,catchPhrase,bs)
// blok.appendChild(button);

// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

button.onclick = function(){
    // console.log(arrLocalStorege.id)
    fetch(`https://jsonplaceholder.typicode.com/users/${arrLocalStorege.id}/posts`)
        .then(value=>value.json())
        .then(posts=>{
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];

                let titlePost= document.createElement('p');
                titlePost.innerText=post.title;


// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
                let btn = document.createElement('button');
                btn.innerText = 'go to post details'
                blokRight.append(titlePost,btn);

                btn.onclick= function(){
                    // console.log(post.id)
                    document.location='post-details.html';
                    localStorage.setItem('post', JSON.stringify(post));
                }

            }


        });
}