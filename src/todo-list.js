let inbox = [];
let projects = [];
let todoLists = [];
let currentProject;

if (!localStorage.getItem('inbox')) {
    projects.push('Inbox');
    todoLists.push(inbox);  
} else accessStorage();

currentProject = inbox;

export function todoItem (title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
}

export function addItemTodoList(item) {
    currentProject.push(item);
    populateStorage()
}

export function removeItemTodoList(item) {
    const index = inbox.indexOf(item);
    currentProject.splice(index, 1)
    populateStorage()
}

export function getTodoList() {
    return currentProject;
}

export function addProject(project) {
    let todoList = []
    todoLists.push(todoList);
    projects.push(project);
    populateStorage()
}

export function removeProject(project) {
    const index = projects.indexOf(project);
    projects.splice(index, 1);
    todoLists.splice(index, 1);
    currentProject = inbox;
    populateStorage()
}

export function getProjects() {
    return projects
}

export function setProject(project) {
    const currentIndex = project;
    currentProject = todoLists[currentIndex];
}

export function updateTitle(title, index) {
    currentProject[index].title = title;
    populateStorage()
}

export function updateDate(date, index) {
    currentProject[index].dueDate = date;
    populateStorage()
}

export function populateStorage() {
    localStorage.setItem('inbox', JSON.stringify(inbox));
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}
    
   
export function accessStorage() {
    inbox = JSON.parse(localStorage.getItem('inbox')).slice(0);
    projects = JSON.parse(localStorage.getItem('projects')).slice(0);
    todoLists = JSON.parse(localStorage.getItem('todoLists')).slice(0);
}
