import Logic from "./modules/logic.js";
import UI from "./modules/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const tasks = Logic.getTasks();

  tasks.forEach(task => {
    UI.addTaskToUI(
      task,
      Logic.toggleTaskCompletion,
      Logic.removeTask,
      Logic.editTask
    );
  });

  UI.attachFormListener((text, category, priority) => {
    Logic.addTask(text, category, priority);
    UI.addTaskToUI(
      { text, category, priority, completed: false },
      Logic.toggleTaskCompletion,
      Logic.removeTask,
      Logic.editTask
    );
  });
});
