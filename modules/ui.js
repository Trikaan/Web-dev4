const UI = (() => {
    const todoList = document.getElementById("todo-list");
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const categoryInput = document.getElementById("todo-category");
    const priorityInput = document.getElementById("todo-priority");
  
    function addTaskToUI(task, onComplete, onDelete, onEdit) {
      const li = document.createElement("li");
      li.className = `todo-item ${task.completed ? "completed" : ""}`;
      li.innerHTML = `
        <div>
          <span>${task.text}</span>
          <small class="task-meta">[${task.category}] - Priority: ${task.priority}</small>
        </div>
        <div>
          <button class="edit-btn">✎</button>
          <button class="complete-btn">✔</button>
          <button class="delete-btn">✖</button>
        </div>
      `;
  
      li.querySelector(".complete-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
        onComplete(task.text);
      });
  
      li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
        onDelete(task.text);
      });
  
      li.querySelector(".edit-btn").addEventListener("click", () => {
        const newText = prompt("Edit Task:", task.text) || task.text;
        const newCategory = prompt("Edit Category:", task.category) || task.category;
        const newPriority = prompt("Edit Priority (High, Medium, Low):", task.priority) || task.priority;
  
        onEdit(task.text, newText, newCategory, newPriority);
        li.querySelector("span").textContent = newText;
        li.querySelector(".task-meta").textContent = `[${newCategory}] - Priority: ${newPriority}`;
      });
  
      todoList.appendChild(li);
    }
  
    function attachFormListener(onSubmit) {
      todoForm.addEventListener("submit", e => {
        e.preventDefault();
        const text = todoInput.value.trim();
        const category = categoryInput.value;
        const priority = priorityInput.value;
  
        if (text) {
          onSubmit(text, category, priority);
          todoInput.value = "";
        }
      });
    }
  
    return { addTaskToUI, attachFormListener };
  })();
  export default UI;
  