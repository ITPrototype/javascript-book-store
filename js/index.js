let users = []
let num = 0
const btn = document.getElementById('downBtn')
const regBtn = document.getElementById('regBtn')
const form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const login = document.getElementById('login').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    users.push({ id: num++, login: login, email: email, pass: pass, isLogged: true })
    btn.disabled = false
    forEachButton(b => b.disabled = false)
    localStorage.setItem('users', JSON.stringify(users))
    check()
})
function check() {
    const getLoc = JSON.parse(localStorage.getItem('users'))
    const greetuser = document.getElementById('sayHi')
    if (getLoc === null) {
        btn.disabled = true
    } else {
        btn.disabled = false
        greetuser.innerHTML = `Logged as ${getLoc[0].login}`
        regBtn.value = 'Registered'
        regBtn.disabled = true
        forEachButton(b => b.disabled = false)
    }
}
setTimeout(function(){check()},5000)
function forEachButton(func) {
    let elements = document.getElementsByTagName("button");
    for (let i = 0, len = elements.length; i < len; i++) {
        func(elements[i])
    }
}
