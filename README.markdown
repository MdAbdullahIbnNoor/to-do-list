# Interactive To-Do List Application

Welcome to the **Interactive To-Do List Application**! This is a beginner-friendly web project built using HTML, CSS, and JavaScript. It allows you to add tasks, mark them as completed, delete tasks, and save them so they stay even after you refresh the page. This project is great for learning the basics of JavaScript while creating something useful!

## What Does This Project Do?

This application lets you:
- **Add tasks**: Type a task in the input field and click "Add Task" or press the **Enter** key.
- **Mark tasks as completed**: Click a task to mark it as done (it gets a strikethrough).
- **Delete tasks**: Click the "Delete" button next to a task to remove it.
- **Save tasks**: Tasks are saved in your browser, so they don’t disappear when you refresh the page.

## Prerequisites

To run this project, you need:
- A **text editor** (like Visual Studio Code, Notepad++, or any code editor).
- A **web browser** (like Chrome, Firefox, or Edge).
- Basic knowledge of HTML and CSS (you don’t need to be an expert!).
- No prior JavaScript knowledge is required, but it helps to follow along with the code comments.

## Getting Started

Follow these steps to set up and run the project:

1. **Clone or Download the Repository**:
   - If you’re using GitHub, click the green "Code" button and download the ZIP file, or clone the repository using:
     ```bash
     git clone <repository-url>
     ```
   - If you’re not using GitHub, copy the files (`index.html`, `styles.css`, `script.js`) to a folder on your computer.

2. **Open the Project**:
   - Open the folder in your text editor.
   - Find the `index.html` file and open it in a web browser (you can double-click it, or drag it into your browser).

3. **Explore the Application**:
   - Type a task in the input field and click "Add Task" or press **Enter**.
   - Click a task to mark it as completed (it will show a strikethrough).
   - Click the "Delete" button next to a task to remove it.
   - Refresh the page to see that your tasks are still there!

## File Structure

Here’s what each file in the repository does:

- **`index.html`**: The structure of the webpage, including the input field, button, and task list.
- **`styles.css`**: The styles that make the app look nice and user-friendly.
- **`script.js`**: The JavaScript code that makes the app interactive (adding tasks, deleting, saving, etc.).
- **`README.md`**: This file, explaining how to use the project.

## Code Overview

### `index.html`
This file sets up the webpage. It includes:
- A heading ("To-Do List").
- An input field and button to add tasks.
- A list to display tasks.
- Links to the CSS and JavaScript files.

### `styles.css`
This file styles the app to make it look clean and modern:
- Centers the content on the page.
- Adds colors, padding, and hover effects to buttons.
- Styles tasks with a strikethrough when marked as completed.

### `script.js`
This file contains the JavaScript that makes the app work:
- **Adding tasks**: Adds a new task when you click the button or press Enter.
- **Marking tasks**: Clicking a task toggles its "completed" status.
- **Deleting tasks**: Clicking "Delete" removes a task.
- **Saving tasks**: Uses `localStorage` to save tasks in your browser.

Here’s a snippet from `script.js` to show how tasks are added:
```javascript
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
}
```

## How to Use the App

1. **Add a Task**:
   - Type a task (e.g., "Buy groceries") in the input field.
   - Click the "Add Task" button or press the **Enter** key.
   - The task appears in the list below.

2. **Mark a Task as Completed**:
   - Click on a task in the list.
   - It will get a strikethrough to show it’s done.
   - Click again to mark it as not done.

3. **Delete a Task**:
   - Click the red "Delete" button next to a task.
   - The task will be removed from the list.

4. **Save Tasks**:
   - Tasks are automatically saved in your browser.
   - Try refreshing the page—your tasks will still be there!

## Learning Objectives

This project helps you learn:
- **HTML**: Structuring a webpage with inputs, buttons, and lists.
- **CSS**: Styling a webpage to make it look good and responsive.
- **JavaScript**:
  - Selecting elements on the page (`getElementById`).
  - Listening for clicks and key presses (`addEventListener`).
  - Creating and removing elements (`createElement`, `appendChild`).
  - Saving data in the browser (`localStorage`).
  - Working with arrays and objects to manage tasks.

## Troubleshooting

- **Tasks not adding?**
  - Make sure you typed something in the input field (empty tasks show an alert).
  - Check the browser console (right-click page, select "Inspect," go to "Console") for errors.
- **Tasks not saving?**
  - Ensure your browser supports `localStorage` (most modern browsers do).
- **Page not styled?**
  - Confirm that `styles.css` is in the same folder as `index.html` and linked correctly.

## Next Steps

Want to make the app even better? Try these ideas:
- Add a "Clear All" button to remove all tasks.
- Add filters to show only "All," "Active," or "Completed" tasks.
- Let users edit tasks by clicking them.
- Add categories or priorities to tasks.

## Resources

- [MDN Web Docs](https://developer.mozilla.org/): Learn more about HTML, CSS, and JavaScript.
- [W3Schools](https://www.w3schools.com/): Simple tutorials for beginners.
- [JavaScript Info](https://javascript.info/): Detailed JavaScript guides.

Happy coding! If you have questions or want to add features, feel free to explore or ask for help!