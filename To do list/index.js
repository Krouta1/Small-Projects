const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []; // get objcet from local storage or use empty array
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY) // get and id of selected list from local storage

listsContainer.addEventListener('click',(e)=>{ // adding event listener to whole list container and checking if li was cliked, if so getting id of this li
    if(e.target.tagName.toLowerCase() === 'li'){ 
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

deleteListButton.addEventListener('click',(e)=>{
    lists = lists.filter(list => list.id !== selectedListId ) // filter the one item that is selected
    selectedListId = null
    saveAndRender()
})

newListForm.addEventListener('submit', (e)=>{
    e.preventDefault() // when you hit enter form wont submit
    const listName = newListInput.value
    if(listName==null || listName==='') return // if you dont fill input form it wont submit
    const list = createList(listName)
    newListInput.value = null // clear input
    lists.push(list) // push created list to lists Array, co i can see them in DOM
    saveAndRender()
})

const createList = (name) =>{
    return { id: Date.now().toString(), name: name, tasks:[]}
}

const saveAndRender = () => {
    save()
    render()
}


const save = () =>{
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists)) // saving objects with  LOCAL_STORAGE_LIST_KEY to the local storage
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId) // saving id of selected list to local storage
}

const render = () => {
    clearElement(listsContainer)
    lists.forEach(list =>{ //taking objects from lists array 
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id
        listElement.classList.add('list-name');                 // creating list elements for My tasks and rendering them to DOM 
        listElement.innerText = list.name;
        if(list.id === selectedListId) {
            listElement.classList.add('active-list') //adding class to selected list
        }
        listsContainer.appendChild(listElement)
    })
};

const clearElement = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
};

render()
