let tasks = localStorage.getItem('task') || [];
let currentFilter = 'all';

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = taskText;
    
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.backgroundColor = '#dc3545';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.borderRadius = '4px';
    deleteBtn.style.padding = '5px 10px';
    
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent li click event from firing
        taskList.removeChild(li);
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
});