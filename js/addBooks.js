let books = []
const btn = document.getElementById('downBtn')
const regBtn = document.getElementById('regBtn')
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
        console.log('Logged');
    }
}
function forEachButton(func) {
    let elements = document.getElementsByTagName("button");
    for (let i = 0, len = elements.length; i < len; i++) {
        func(elements[i])
    }
}
async function onatili(){
    let onatiliArr = []
    document.getElementById('book').innerHTML = ''
    const response = await fetch('./data.json')
    const data = await response.json()
    onatiliArr = data.onatili
    addBooks(onatiliArr)
    check()
}
async function biologiya(){
    alert('Tez orada')
}
async function kimyo(){
    alert('Tez orada')
}
async function geomet(){
    alert('Tez orada')
}
async function rustili(){
    alert('Tez orada')
}
async function fizika(){
    let fizikaArr = []
    document.getElementById('book').innerHTML = ''
    const response = await fetch('./data.json')
    const data = await response.json()
    fizikaArr = data.fizika
    addBooks(fizikaArr)
    check()
}
async function matem() {
    let matemArr = []
    document.getElementById('book').innerHTML = ''
    const response = await fetch('./data.json')
    const data = await response.json()
    matemArr = data.matem
    addBooks(matemArr)
    check()
}
function generateCard(book) {
    return `
    <div class="card" style="width: 18rem;">
        <img src="${book.img}" alt="${book.title}">
        <div class="card-body">
            <p class="card-title">${book.title}</p>
        </div>
        <div class="card-footer">
            <button class="btn btn-success" id="downBtn"
                onclick="window.open('${book.link}')"
                disabled>Yuklash</button>
        </div>
    </div>
    `
}
function addBooks(arr) {
    const matem = document.getElementById('book')
    let htmllist = ''
    arr.map(book=>(
        htmllist += generateCard(book)
    ))
    matem.innerHTML += htmllist
}
