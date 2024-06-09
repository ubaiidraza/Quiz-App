
"https://the-trivia-api.com/v2/questions"


function myInput(){
    let x = document.querySelector('#password')
    if(x.type === 'password'){
        x.type = 'text'
    }else {
        x.type = 'password'
    }
}

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')


let getLocal = JSON.parse(localStorage.getItem('sendLocal'))
console.log(getLocal);
let emailCheck = getLocal.map(item => {
    return item.email
})


form.addEventListener('submit', event => {
    event.preventDefault()
    getLocal.filter(item => {
        if(item.email === email.value && item.password === password.value){
            alert('Login SuccesFull')
            window.location = 'quiz.html'
        }else if(item.email === email.value){
            alert('Password Incorrect!')
        }else {
            alert('please Register First')
        }
    })
})