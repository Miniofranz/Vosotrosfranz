// app.js
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        todoList.appendChild(li);
        taskInput.value = '';
    }
}

// Service worker registration (add this in your app)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}