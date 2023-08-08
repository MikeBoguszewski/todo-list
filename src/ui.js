import {getTodoList, addItemTodoList, removeItemTodoList, todoItem, getProjects, addProject, removeProject, setProject, updateTitle, updateDate, accessStorage} from './todo-list'

const inbox = document.querySelector('.inbox');
const projectView = document.querySelector('.project-view');
const projectViewHeader = projectView.querySelector('h2');
const projectButtons = document.querySelectorAll('.project');
const addTaskButton = document.querySelector('.add-task');
const addProjectButton = document.querySelector('.add-project');
const sidebar = document.querySelector('.sidebar');
const todoContainer = document.querySelector('.todo-container');
const projectContainer = document.querySelector('.project-container');


function loadProjectHeader(event) {
    projectViewHeader.innerText = event.target.innerText;
}

projectButtons.forEach((project, index) => {
    project.addEventListener('click', (event) => {
        loadProjectHeader(event);
        setProject(index);
        loadTasks();
    });
});

function loadTaskForm() {
    const taskForm = document.createElement('form');
    const taskInput = document.createElement('input');
    taskInput.classList.add('task-input');
    taskForm.appendChild(taskInput);
    projectView.replaceChild(taskForm, addTaskButton);
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addItemTodoList(new todoItem(taskInput.value));
        loadTasks();
        taskForm.reset();
        projectView.replaceChild(addTaskButton, taskForm);
    });
}

addTaskButton.addEventListener('click', loadTaskForm);

function loadProjectForm() {
    const projectForm = document.createElement('form');
    const projectInput = document.createElement('input');
    projectInput.classList.add('project-input');
    projectForm.appendChild(projectInput);
    sidebar.replaceChild(projectForm, addProjectButton);
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault()
        addProject(projectInput.value);
        loadProjects();
        projectForm.reset();
        sidebar.replaceChild(addProjectButton, projectForm);
    });
}

addProjectButton.addEventListener('click', loadProjectForm);

function loadTasks() {
    todoContainer.innerText = '';
    const todoList = getTodoList();
    todoList.forEach((todoItem, index) => {
        const task = document.createElement('div');
        task.classList.add('todo-item');
        const taskButton = document.createElement('button');
        taskButton.classList.add('todo-button');
        taskButton.innerText = todoItem.title;
        const circleImage = document.createElement('img');
        circleImage.classList.add('circle-image');
        circleImage.src = './circle.svg';
        const dateInput = document.createElement('input');
        dateInput.type = 'date'
        dateInput.classList.add('date-button')
        dateInput.textContent = todoItem.date;

        task.appendChild(circleImage);
        task.appendChild(taskButton);
        task.appendChild(dateInput);
        todoContainer.appendChild(task);

        circleImage.addEventListener('click', () => {
            removeItemTodoList(todoItem);
            loadTasks();
        });
        dateInput.addEventListener('change', () => {
            updateDate(dateInput.value, index);
        });
        taskButton.addEventListener('click', () => {
            editTodoTitle(task, taskButton, todoItem);
        });
    });
}

function loadProjects() {
    projectContainer.innerText = ''
    const projects = getProjects();
    projects.forEach((project, index) => {
        if (index === 0) {
            return;
        }
        const projectButtonContainer = document.createElement('div');
        projectButtonContainer.classList.add('project-button-container')
        const projectButton = document.createElement('button');
        projectButton.classList.add('project')
        projectButton.innerText = project;
        projectButton.addEventListener('click', (event) => {
            loadProjectHeader(event);
            setProject(index);
            loadTasks();
        });
        const deleteButton = document.createElement('img');
        deleteButton.classList.add('delete-button');
        deleteButton.src = './close.svg';
        deleteButton.addEventListener('click', (event) => {
            removeProject(project);
            loadProjects();
            loadTasks();
            projectViewHeader.innerText = inbox.innerText;
        });

        projectButtonContainer.appendChild(projectButton);
        projectButtonContainer.appendChild(deleteButton);
        projectContainer.appendChild(projectButtonContainer);
    });
}

function editTodoTitle(task, taskButton, todoItem) {
    const todoList = getTodoList();
    const titleForm = document.createElement('form');
    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleForm.appendChild(titleInput);
    task.replaceChild(titleForm, taskButton);
    titleForm.addEventListener('submit', (event) => {
        updateTitle(titleInput.value, todoList.indexOf(todoItem));
        event.preventDefault();
        titleForm.reset();
        loadTasks();
        task.replaceChild(taskButton, titleForm);
        
    });
}

loadTasks();
loadProjects();
