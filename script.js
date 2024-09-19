const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const tasksList = document.querySelector(".c-tasks-list");

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const taskValue = taskInput.value.trim();
  if (taskValue) {
    const taskItem = document.createElement("div");
    taskItem.className = "c-task-item";

    taskItem.innerHTML = `
            <span class="task-content">${taskValue}</span>
            <div class="task-item-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

    tasksList.appendChild(taskItem);
    taskInput.value = "";

    // Delete task
    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
      tasksList.removeChild(taskItem);
    });

    // Edit task
    taskItem.querySelector(".edit-btn").addEventListener("click", () => {
      taskInput.value = taskValue;
      tasksList.removeChild(taskItem);
    });
  }
});
