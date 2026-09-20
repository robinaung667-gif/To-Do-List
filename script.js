const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskButn");
const taskList = document.getElementById("taskList");
const addTaskBtnTop = document.getElementById("addTaskBtnTop");
const saveTasksBtn = document.getElementById("saveTasksBtn");
const deleteCompletedBtn = document.getElementById("deleteCompletedBtn");

const STORAGE_KEY = "todo_tasks";

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  { id: 1, text: "Drink Protein For Breakfast", done: false },
  { id: 2, text: "Learn Frontend Basic for interview", done: false },
  { id: 3, text: "Learn React and Tailwind", done: false },
  { id: 4, text: "Eat clean Lunch", done: false },
  { id: 5, text: "4:00 PM Gym Workout", done: false }
];

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.done ? "done" : ""}`;

    li.innerHTML = `
      <div class="task-main">
        <input type="checkbox" ${task.done ? "checked" : ""} />
        <span class="task-text">${task.text}</span>
      </div>
      <div class="task-actions">
        <button type="button" class="edit-btn">Edit ✎</button>
        <button type="button" class="delete-btn">Delete 🗑️</button>
      </div>
    `;

    const checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    li.querySelector(".edit-btn").addEventListener("click", () => {
      const updatedText = prompt("Edit task:", task.text);
      if (updatedText && updatedText.trim()) {
        task.text = updatedText.trim();
        saveTasks();
        renderTasks();
      }
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(li);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  tasks.push({
    id: Date.now(),
    text: taskText,
    done: false
  });

  taskInput.value = "";
  saveTasks();
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

addTaskBtnTop.addEventListener("click", () => {
  taskInput.focus();
});

saveTasksBtn.addEventListener("click", () => {
  saveTasks();
  alert("Tasks saved.");
});

deleteCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
});

renderTasks();