let inbox = [];
let projects = [];
let todoLists = [];
let currentProject;
currentProject = inbox;
projects.push('Inbox');
todoLists.push(inbox);

export function todoItem (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
}

export function addItemTodoList(item) {
    currentProject.push(item);
}

export function removeItemTodoList(item) {
    const index = inbox.indexOf(item);
    currentProject.splice(index, 1)
}

export function getTodoList() {
    return currentProject;
}

export function addProject(project) {
    let todoList = []
    todoLists.push(todoList);
    projects.push(project);
    console.log(projects)
    console.log(todoLists)
}

export function removeProject(project) {
    const index = projects.indexOf(project);
    projects.splice(index, 1);
    todoLists.splice(index, 1);
    currentProject = inbox;
}

export function getProjects() {
    return projects
}

export function setProject(project) {
    const currentIndex = project;
    currentProject = todoLists[currentIndex];
    console.log(currentProject);
}

export function updateTitle(title, index) {
    currentProject[index].title = title;
}

let todoItem0 = new todoItem('Wash Dishes');
let todoItem1 = new todoItem('Do Laundry');
inbox.push(todoItem0)
inbox.push(todoItem1)