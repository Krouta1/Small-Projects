// selectors
let newBookBtn = document.getElementById("new-book-btn")
let newBookForm = document.getElementById("new-book-form")


let myLibrary = []


function Book(title, fname, lname, pages, read){
    this.title = title;
    this.fname = fname;
    this.lname = lname
    this.pages = pages;
    this.read = read;
}

// render Obj of myLibrary to the DOM
function render(){
    let library= document.getElementById("library")
    library.innerHTML = ""
    myLibrary.forEach((book,index )=> { //never forget to add index to  the loop :) pt.1
    library.innerHTML += `
    <div class="book">
        <p>${book.title}</p>
        <div class="author">
            <p>${book.fname}</p>
            <p>${book.lname}</p>
        </div>
        <p>${book.pages}</p>
        <p>${book.read ? "Read":"Not read yet"}</p>
        <button id="remove-btn" onclick="removeBook(${index})">Remove</button> 
    </div>`})
    
}

function addBookToLibrary(){
    let title = document.getElementById("title").value
    let fname = document.getElementById("first-name").value
    let lname = document.getElementById("last-name").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked
    let newBook = new Book (title, fname, lname, pages, read) // new Book obj created by form
    myLibrary.push(newBook)
}

function removeBook(index){
    myLibrary.splice(index,1) //never forget to add index to loop :) pt.2
    render()
}

// events and listeners
newBookBtn.addEventListener("click",function(){
    newBookForm.style.display = "block"; //shows up form for new book
})

newBookForm.addEventListener("submit",function(e){
    event.preventDefault()
    addBookToLibrary() //submit form, create new Book obj and render the myLibrary
    render()
    newBookForm.style.display = "none"
})
