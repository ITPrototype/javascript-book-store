let books = []
async function fetchBooks() {
    const response = await fetch('./data.json')
    const data = await response.json()
    books = data.matem
    console.log('Books:',books);
    addBooks()
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
function addBooks() {
    const matem = document.getElementById('matem')
    let htmllist = ''
    books.map(book=>(
        htmllist += generateCard(book)
    ))
    matem.innerHTML += htmllist
}
fetchBooks()