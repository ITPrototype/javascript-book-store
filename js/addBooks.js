let books = []

async function onatili(){
    let onatiliArr = []
    document.getElementById('book').innerHTML = ''
    const response = await fetch('./data.json')
    const data = await response.json()
    onatiliArr = data.onatili
    addBooks(onatiliArr)
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
}
async function matem() {
    let matemArr = []
    document.getElementById('book').innerHTML = ''
    const response = await fetch('./data.json')
    const data = await response.json()
    matemArr = data.matem
    addBooks(matemArr)
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
