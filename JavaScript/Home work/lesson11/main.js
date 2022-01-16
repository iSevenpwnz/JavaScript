// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let { name, age } = document.forms.userForm; //через деструктуризацію
let name = document.forms.userForm.name;
let age = document.forms.userForm.age;
let btn = document.getElementById('btn');
let key = 'key';

let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem(key, JSON.stringify(user));
};

btn.onclick = () => {
    save(name.value, age.value);
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let {model, type, volume} = document.forms.carForm;  // деструктуризація
let model = document.forms.carForm.model;
let type = document.forms.carForm.type;
let volume = document.forms.carForm.volume;
let btnCar = document.getElementById('btnCar');
let item = 'keyCar';

let saveCar = (modelCar, typeCar, volumeCar) => {
    let newArr = JSON.parse(localStorage.getItem(item)) || [];

    newArr.push({modelCar, typeCar, volumeCar})
    localStorage.setItem(item, JSON.stringify(newArr));
};

btnCar.onclick = () => {
    saveCar(model.value, type.value, volume.value);
}