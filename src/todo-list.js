let todoList = [];
let projects = [];
let todoLists = [];

export function todoItem (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

export function addItemTodoList(item) {
    todoList.push(item);
}

export function removeItemTodoList(item) {
    const index = todoList.indexOf(item);
    todoList.splice(index, 1)
}

export function getTodoList() {
    return todoList;
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
}

export function getProjects() {
    return projects
}

let todoItem0 = new todoItem('Wash Dishes');
let todoItem1 = new todoItem('Do Laundry');
todoList.push(todoItem0)
todoList.push(todoItem1)