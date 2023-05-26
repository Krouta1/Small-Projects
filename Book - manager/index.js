let myLibrary = []


// Book object constructor to be change...it is just here now. Just do HTML and CSS first
function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = ()=>{
        console.log(`${title} by ${author}, ${pages}, ${read}.`)
    }
}
