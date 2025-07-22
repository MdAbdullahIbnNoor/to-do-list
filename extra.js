// Step 1: Initialize tasks array and filter
// Load tasks from localStorage (browser's "notebook") or start with an empty array
// Set default filter to show all tasks
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Step 2: Select DOM elements
// Get the input field, buttons, and task list (<ul>) from the HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');
const filterButtons = document.querySelectorAll('.filterBtn');

// Step 3: Function to add a task
// Adds a new task to the tasks array and updates the display
function addTask() {
    const taskText = taskInput.value.trim(); // Get input text, remove extra spaces
    
    if (taskText === '') { // Check if input is empty
        alert('Please enter a task!'); // Show alert if empty
        return;
    }
    
    tasks.push({ text: taskText, completed: false }); // Add new task to array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to localStorage
    renderTasks(); // Update the webpage to show the new task
    taskInput.value = ''; // Clear the input field
}

// Step 4: Function to render tasks
// Displays tasks on the webpage based on the current filter
function renderTasks() {
    taskList.innerHTML = ''; // Clear the current list to avoid duplicates
    let filteredTasks = tasks; // Start with all tasks
    
    // Step 5: Filter tasks based on current filter
    // Show only active or completed tasks if filter is set
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed); // Show only non-completed tasks
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed); // Show only completed tasks
    }
    
    // Step 6: Create HTML for each task
    filteredTasks.forEach((task, index) => { // Loop through filtered tasks
        const li = document.createElement('li'); // Create a new list item (<li>)
        
        // Step 7: Create a span for task text
        // Wraps task text in a <span> so the "completed" style only affects text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text; // Set the task text
        if (task.completed) { // Check if task is marked as completed
            taskSpan.classList.add('completed'); // Add strikethrough style to text
        }
        
        // Step 8: Add click event to mark task as completed
        // Clicking the task text toggles its completed status
        taskSpan.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed; // Toggle completed status
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks
            renderTasks(); // Refresh the webpage to show the change
        });
        
        // Step 9: Create delete button
        // Adds a "Delete" button for each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete'; // Set button text
        deleteBtn.style.marginLeft = '10px'; // Style button (space from text)
        deleteBtn.style.backgroundColor = '#dc3545'; // Red background
        deleteBtn.style.color = 'white'; // White text
        deleteBtn.style.border = 'none'; // No border
        deleteBtn.style.borderRadius = '4px'; // Rounded corners
        deleteBtn.style.padding = '5px 10px'; // Padding for size
        
        // Step 10: Add click event to delete task
        // Removes the task when the "Delete" button is clicked
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from triggering task completion
            tasks.splice(index, 1); // Remove task at this index from array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks
            renderTasks(); // Refresh the webpage to remove the task
        });
        
        // Step 11: Add span and button to list item
        // Put the task text and delete button inside the <li>
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li); // Add the <li> to the <ul> on the webpage
    });
}

// Step 12: Add task on button click
// Runs addTask when the "Add Task" button is clicked
addTaskBtn.addEventListener('click', addTask);

// Step 13: Add task on Enter key press
// Runs addTask when the Enter key is pressed in the input field
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the Enter key was pressed
        addTask(); // Add the task
    }
});

// Step 14: Clear all tasks
// Removes all tasks when the "Clear All" button is clicked
clearAllBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all tasks?')) { // Ask for confirmation
        tasks = []; // Empty the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save empty array
        renderTasks(); // Update the webpage to show no tasks
    }
});

// Step 15: Filter tasks
// Updates the display when a filter button (All, Active, Completed) is clicked
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active')); // Remove active style from all buttons
        button.classList.add('active'); // Add active style to clicked button
        currentFilter = button.dataset.filter; // Set the current filter (all, active, completed)
        renderTasks(); // Update the webpage to show filtered tasks
    });
});

// Step 16: Initial render
// Show any saved tasks when the page loads
renderTasks();