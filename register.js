
function myInput() {
    let x = document.querySelector('#password')
    if (x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

let fullName = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;


let userRegister = []
let localData;


let pushData = () => {
    localData = localStorage.setItem('sendLocal', JSON.stringify(userRegister))
}

form.addEventListener('submit', event => {
    event.preventDefault()
    if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
        userRegister.push({
            name: fullName.value,
            password: password.value,
            email: email.value
        })
        console.log(userRegister);
        pushData()
        alert('Register succesfull')
        window.location = 'index.html'
    } else {
        alert('Password 8 and 15 characters, including at least one special character, one number, and one uppercase letter:')
    }
})
