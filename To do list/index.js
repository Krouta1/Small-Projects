const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');

const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');
const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTaskBtn = document.querySelector('[data-clear-complete-task-btn]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []; // get objcet from local storage or use empty array, obj of task list
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY); // get and id of selected list from local storage, id of tsk list

listsContainer.addEventListener('click',(e)=>{ // adding event listener to whole list container and checking if li was cliked, if so getting id of this li
    if(e.target.tagName.toLowerCase() === 'li'){ 
        selectedListId = e.target.dataset.listId;
        saveAndRender();
    };
});

tasksContainer.addEventListener('click',(e)=>{ // adding event listener to whole container of tasks, 
    if(e.target.tagName.toLowerCase() === 'input'){ //it is checking if task is checked and if it is checked it find the proper task by id and set complete to true
        const selectedList= lists.find(list => list.id === selectedListId);
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        save();
        renderTaskCount(selectedList);
    };
});

clearCompleteTaskBtn.addEventListener('click',(e)=>{
    const selectedList = lists.find (list => list.id === selectedListId) // find the one task list where his id is selectedId
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete) // set it to task that are not completed
    saveAndRender()
})

deleteListButton.addEventListener('click',(e)=>{
    lists = lists.filter(list => list.id !== selectedListId ); // filter out the  task list that is selected by his id
    selectedListId = null;
    saveAndRender();
});

newListForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // when you hit enter form wont submit
    const listName = newListInput.value;
    if(listName==null || listName==='') return; // if you dont fill input form it wont submit
    const list = createList(listName);
    newListInput.value = null; // clear input
    lists.push(list); // push created  task list to lists Array, co i can see them in DOM
    saveAndRender();
});

newTaskForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // when you hit enter form wont submit
    const taskName = newTaskInput.value;
    if(taskName==null || taskName==='') return; // if you dont fill input form it wont submit
    const task = createTask(taskName);
    newTaskInput.value = null; // clear input
    const selectedList = lists.find(list=>list.id === selectedListId)
    selectedList.tasks.push(task);
    saveAndRender();
});

const createList = (name) =>{
    return { id: Date.now().toString(), name: name, tasks:[]}; // creating list of tasks in My Lists (DOM)
};

const createTask = (name) =>{
    return { id: Date.now().toString(), name: name, complete:false}; // creating tasks for selected task list
}

const saveAndRender = () => {
    save();
    render();
};


const save = () =>{
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists)); // saving objects with  LOCAL_STORAGE_LIST_KEY to the local storage
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId); // saving id of selected  task list to local storage
};

const render = () => {
    clearElement(listsContainer);
    renderList();
    const selectedList = lists.find(list => list.id === selectedListId); // find task list with specific id

    if(selectedListId==null){ // displaying list of task if i selected task from task list
        listDisplayContainer.style.display = 'none';
    } else {
        listDisplayContainer.style.display = '';
        listTitleElement.innerText = selectedList.name; // setting title innerText to name of task list
        renderTaskCount(selectedList);
        clearElement(tasksContainer);
        renderTasks(selectedList);
    };
};

const renderTasks = (selectedList) => {
    selectedList.tasks.forEach ( task =>{
        const taskElement = document.importNode(taskTemplate.content, true); // copy everything inside templete component
        const checkbox = taskElement.querySelector('input');
        checkbox.id = task.id;
        checkbox.checked = task.complete;                       // creating task and reder it to DOM
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.name);
        tasksContainer.appendChild(taskElement);
    });
}; 

const renderTaskCount = (selectedList) => { // counts how many task is remaining
    const incompleteTasksCount = selectedList.tasks.filter(task => !task.complete).length;
    const taskString = incompleteTasksCount === 1 ? "task" : "tasks";
    listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`;
}

const renderList = () => {
    lists.forEach(list =>{ //taking objects from lists array 
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add('list-name');                 // creating  task list elements for My tasks and rendering them to DOM 
        listElement.innerText = list.name;
        if(list.id === selectedListId) {
            listElement.classList.add('active-list') //adding class to selected task list
        };
        listsContainer.appendChild(listElement);
    });
};

const clearElement = (element) => { //clear element of your choice
    while(element.firstChild){
        element.removeChild(element.firstChild)
    };
};

render();
